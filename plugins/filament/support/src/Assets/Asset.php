<?php

declare(strict_types=1);

namespace Filament\Support\Assets;

use Composer\InstalledVersions;
use Filament\Support\Facades\FilamentAsset;
use Throwable;

abstract class Asset
{
    protected string $id;

    protected ?string $path = null;

    protected bool $isLoadedOnRequest = false;

    protected ?string $package = null;

    public function __construct(string $id, ?string $path = null)
    {
        $this->id = $id;
        $this->path = $path;
    }

    abstract public function getPublicPath(): string;

    final public static function make(string $id, ?string $path = null): static
    {
        return app(static::class, ['id' => $id, 'path' => $path]);
    }

    final public function loadedOnRequest(bool $condition = true): static
    {
        $this->isLoadedOnRequest = $condition;

        return $this;
    }

    final public function getId(): string
    {
        return $this->id;
    }

    final public function package(?string $package): static
    {
        $this->package = $package;

        return $this;
    }

    final public function getPackage(): ?string
    {
        return $this->package;
    }

    final public function getPath(): ?string
    {
        return $this->path;
    }

    final public function isRemote(): bool
    {
        return str($this->getPath())->startsWith(['http://', 'https://', '//']);
    }

    final public function getVersion(): string
    {
        $package = $this->getPackage();

        if (blank($package)) {
            return InstalledVersions::getVersion('filament/support');
        }

        if (
            ($package === 'app') &&
            filled($appVersion = FilamentAsset::getAppVersion())
        ) {
            return $appVersion;
        }

        try {
            return InstalledVersions::getVersion($package);
        } catch (Throwable $exception) {
            return InstalledVersions::getVersion('filament/support');
        }
    }

    final public function isLoadedOnRequest(): bool
    {
        return $this->isLoadedOnRequest;
    }
}
