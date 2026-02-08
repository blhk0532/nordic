<?php

declare(strict_types=1);

namespace Filament\Support\Commands\FileGenerators;

use Filament\Support\Commands\FileGenerators\Concerns\CanCheckFileGenerationFlags;
use Filament\Support\Commands\FileGenerators\Contracts\FileGenerator;
use Nette\PhpGenerator\ClassType;
use Nette\PhpGenerator\PhpFile;
use Nette\PhpGenerator\PhpNamespace;
use Nette\PhpGenerator\Printer;
use Nette\PhpGenerator\PsrPrinter;

abstract class ClassGenerator implements FileGenerator
{
    use CanCheckFileGenerationFlags;

    protected PhpNamespace $namespace;

    abstract public function getBasename(): string;

    abstract public function getNamespace(): string;

    final public function getFile(): PhpFile
    {
        $file = (new PhpFile);
        $this->configureFile($file);

        $this->namespace = $file->addNamespace($this->getNamespace());
        $this->useImportsInNamespace($this->namespace, $this->getImports());
        $this->configureNamespace($this->namespace);

        $class = $this->namespace->addClass($this->getBasename());

        if (filled($extends = $this->getExtends())) {
            $class->setExtends($extends);
        }

        foreach ($this->getImplements() as $implement) {
            $class->addImplement($implement);
        }

        $this->addTraitsToClass($class);
        $this->addPropertiesToClass($class);
        $this->addMethodsToClass($class);
        $this->configureClass($class);

        return $file;
    }

    /**
     * @return ?class-string
     */
    final public function getExtends(): ?string
    {
        return null;
    }

    /**
     * @return array<class-string>
     */
    final public function getImplements(): array
    {
        return [];
    }

    /**
     * @param  class-string  $name
     */
    final public function simplifyFqn(string $name): string
    {
        return $this->namespace->simplifyName($name);
    }

    final public function hasPartialImports(): bool
    {
        return $this->hasFileGenerationFlag(FileGenerationFlag::PARTIAL_IMPORTS);
    }

    /**
     * @return array<string>
     */
    final public function getImports(): array
    {
        return [];
    }

    final public function getPrinter(): Printer
    {
        $printer = new PsrPrinter;
        $printer->linesBetweenProperties = 1;

        return $printer;
    }

    final public function generate(): string
    {
        return $this->getPrinter()->printFile($this->getFile());
    }

    protected function configureFile(PhpFile $file): void {}

    protected function configureNamespace(PhpNamespace $namespace): void {}

    protected function configureClass(ClassType $class): void {}

    protected function addTraitsToClass(ClassType $class): void {}

    protected function addPropertiesToClass(ClassType $class): void {}

    protected function addMethodsToClass(ClassType $class): void {}

    protected function extractNamespace(string $fqn): string
    {
        return (string) str($fqn)->beforeLast('\\');
    }

    /**
     * @param  array<string>  $imports
     */
    protected function useImportsInNamespace(PhpNamespace $namespace, array $imports): void
    {
        foreach ($imports as $key => $import) {
            if (is_string($key)) {
                $namespace->addUse($key, alias: $import);

                continue;
            }

            $namespace->addUse($import);
        }
    }

    protected function importUnlessPartial(string $class): void
    {
        if ($this->hasPartialImports()) {
            return;
        }

        $this->namespace->addUse($class);
    }

    protected function configurePrinter(Printer $printer): void {}
}
