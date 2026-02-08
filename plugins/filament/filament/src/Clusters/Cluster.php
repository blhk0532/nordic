<?php

declare(strict_types=1);

namespace Filament\Clusters;

use Filament\Facades\Filament;
use Filament\Pages\Page;
use Filament\Panel;
use Illuminate\Support\Arr;

class Cluster extends Page
{
    protected static ?string $clusterBreadcrumb = null;

    protected static bool $shouldRegisterSubNavigation = true;

    /**
     * @return array<class-string>
     */
    public static function getClusteredComponents(): array
    {
        return Filament::getClusteredComponents(self::class);
    }

    public static function canAccessClusteredComponents(): bool
    {
        foreach (self::getClusteredComponents() as $component) {
            if ($component::canAccess()) {
                return true;
            }
        }

        return false;
    }

    public static function shouldRegisterNavigation(): bool
    {
        return parent::shouldRegisterNavigation() && self::canAccessClusteredComponents();
    }

    public static function shouldRegisterSubNavigation(): bool
    {
        return self::$shouldRegisterSubNavigation;
    }

    /**
     * @param  array<string, string>  $breadcrumbs
     * @return array<string, string>
     */
    public static function unshiftClusterBreadcrumbs(array $breadcrumbs): array
    {
        $clusterBreadcrumb = self::getClusterBreadcrumb();

        if (Arr::first($breadcrumbs) === $clusterBreadcrumb) {
            return $breadcrumbs;
        }

        return [
            ...[self::getUrl() => $clusterBreadcrumb],
            ...$breadcrumbs,
        ];
    }

    public static function getNavigationLabel(): string
    {
        return self::$navigationLabel ?? self::$title ?? str(class_basename(self::class))
            ->beforeLast('Cluster')
            ->kebab()
            ->replace('-', ' ')
            ->ucwords();
    }

    public static function getClusterBreadcrumb(): ?string
    {
        return self::$clusterBreadcrumb ?? self::$title ?? str(class_basename(self::class))
            ->beforeLast('Cluster')
            ->kebab()
            ->replace('-', ' ')
            ->ucwords();
    }

    public static function prependClusterSlug(Panel $panel, string $slug): string
    {
        return self::getSlug($panel)."/{$slug}";
    }

    public static function prependClusterRouteBaseName(Panel $panel, string $name): string
    {
        return (string) str(self::getSlug($panel))
            ->replace('/', '.')
            ->append(".{$name}");
    }

    public static function getSlug(?Panel $panel = null): string
    {
        if (filled(self::$slug)) {
            return self::$slug;
        }

        return (string) str(class_basename(self::class))
            ->beforeLast('Cluster')
            ->kebab()
            ->slug();
    }

    public static function getRouteName(?Panel $panel = null): string
    {
        $panel ??= Filament::getCurrentOrDefaultPanel();

        return $panel->generateRouteName(self::getRelativeRouteName($panel));
    }

    public static function getNavigationItemActiveRoutePattern(): string
    {
        return self::getRouteName().'.*';
    }

    public static function registerRoutes(Panel $panel): void
    {
        self::routes($panel);
    }

    public function mount(): void
    {
        foreach ($this->getCachedSubNavigation() as $navigationGroup) {
            foreach ($navigationGroup->getItems() as $navigationItem) {
                redirect($navigationItem->getUrl());

                return;
            }
        }
    }

    public function getSubNavigation(): array
    {
        return $this->generateNavigationItems(self::getClusteredComponents());
    }
}
