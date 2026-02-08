<?php

declare(strict_types=1);

namespace Filament\Forms\Components\RichEditor;

use Closure;
use Filament\Forms\Components\RichEditor\FileAttachmentProviders\Contracts\FileAttachmentProvider;
use Filament\Forms\Components\RichEditor\Plugins\Contracts\RichContentPlugin;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class RichContentAttribute implements Htmlable
{
    private ?string $fileAttachmentsDiskName = null;

    private ?string $fileAttachmentsVisibility = null;

    /**
     * @var array<RichContentPlugin>
     */
    private array $plugins = [];

    private ?FileAttachmentProvider $fileAttachmentProvider = null;

    /**
     * @var ?array<string, mixed>
     */
    private ?array $mergeTags = null;

    /**
     * @var ?array<string, string>
     */
    private ?array $mergeTagLabels = null;

    /**
     * @var ?array<MentionProvider>
     */
    private ?array $mentionProviders = null;

    /**
     * @var ?array<class-string<RichContentCustomBlock> | array<string, mixed> | Closure>
     */
    private ?array $customBlocks = null;

    private bool $isJson = false;

    /**
     * @var ?array<string, string | TextColor>
     */
    private ?array $textColors = null;

    private bool $hasCustomTextColors = false;

    public function __construct(private Model $model, private string $name) {}

    public static function make(Model $model, string $name): static
    {
        return app(self::class, ['model' => $model, 'name' => $name]);
    }

    public function fileAttachmentsDisk(?string $name): static
    {
        $this->fileAttachmentsDiskName = $name;

        return $this;
    }

    public function fileAttachmentsVisibility(?string $visibility): static
    {
        $this->fileAttachmentsVisibility = $visibility;

        return $this;
    }

    public function getFileAttachmentsDiskName(): ?string
    {
        return $this->fileAttachmentsDiskName;
    }

    public function getFileAttachmentsVisibility(): ?string
    {
        return $this->fileAttachmentsVisibility ?? $this->getFileAttachmentProvider()?->getDefaultFileAttachmentVisibility();
    }

    /**
     * @param  array<RichContentPlugin>  $plugins
     */
    public function plugins(array $plugins): static
    {
        $this->plugins = [
            ...$this->plugins,
            ...$plugins,
        ];

        return $this;
    }

    /**
     * @return array<RichContentPlugin>
     */
    public function getPlugins(): array
    {
        return $this->plugins;
    }

    public function fileAttachmentProvider(?FileAttachmentProvider $provider): static
    {
        $this->fileAttachmentProvider = $provider?->attribute($this);

        return $this;
    }

    public function getFileAttachmentProvider(): ?FileAttachmentProvider
    {
        return $this->fileAttachmentProvider;
    }

    public function getModel(): Model
    {
        return $this->model;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function toHtml(): string
    {
        $content = $this->model->getAttribute($this->name);

        if (blank($content)) {
            return '';
        }

        return RichContentRenderer::make($content)
            ->plugins($this->getPlugins())
            ->customBlocks($this->customBlocks)
            ->mergeTags($this->mergeTags)
            ->mentions($this->mentionProviders)
            ->fileAttachmentsDisk($this->getFileAttachmentsDiskName())
            ->fileAttachmentsVisibility($this->getFileAttachmentsVisibility())
            ->fileAttachmentProvider($this->getFileAttachmentProvider())
            ->textColors($this->getTextColors())
            ->toHtml();
    }

    /**
     * @param  ?array<string, mixed>  $tags
     */
    public function mergeTags(?array $tags): static
    {
        $this->mergeTags = $tags;

        return $this;
    }

    /**
     * @param  ?array<string, string>  $labels
     */
    public function mergeTagLabels(?array $labels): static
    {
        $this->mergeTagLabels = $labels;

        return $this;
    }

    /**
     * @return ?array<string, string>
     */
    public function getMergeTags(): ?array
    {
        if (blank($this->mergeTags) && blank($this->mergeTagLabels)) {
            return null;
        }

        return [
            ...array_combine(array_keys($this->mergeTags ?? []), array_keys($this->mergeTags ?? [])),
            ...($this->mergeTagLabels ?? []),
        ];
    }

    /**
     * @param  ?array<MentionProvider>  $providers
     */
    public function mentions(?array $providers): static
    {
        $this->mentionProviders = $providers;

        return $this;
    }

    /**
     * @return ?array<MentionProvider>
     */
    public function getMentionProviders(): ?array
    {
        return $this->mentionProviders;
    }

    /**
     * @param  ?array<class-string<RichContentCustomBlock> | array<string, mixed> | Closure>  $blocks
     */
    public function customBlocks(?array $blocks): static
    {
        $this->customBlocks = $blocks;

        return $this;
    }

    /**
     * @return ?array<class-string<RichContentCustomBlock>>
     */
    public function getCustomBlocks(): ?array
    {
        if (blank($this->customBlocks)) {
            return null;
        }

        $blocks = [];

        foreach ($this->customBlocks as $key => $block) {
            $blocks[] = is_string($key) ? $key : $block;
        }

        return $blocks;
    }

    public function json(bool $condition = true): static
    {
        $this->isJson = $condition;

        return $this;
    }

    public function isJson(): bool
    {
        return $this->isJson;
    }

    /**
     * @param  ?array<string, string | TextColor>  $colors
     */
    public function textColors(?array $colors): static
    {
        $this->textColors = $colors;

        return $this;
    }

    /**
     * @return array<string, string | TextColor>
     */
    public function getTextColors(): array
    {
        $textColors = $this->textColors ?? TextColor::getDefaults();

        return Arr::mapWithKeys(
            $textColors,
            fn (string|TextColor $color, string $name): array => [$name => ($color instanceof TextColor) ? $color : TextColor::make($color, $name)],
        );
    }

    public function customTextColors(bool $condition = true): static
    {
        $this->hasCustomTextColors = $condition;

        return $this;
    }

    public function hasCustomTextColors(): bool
    {
        return $this->hasCustomTextColors;
    }
}
