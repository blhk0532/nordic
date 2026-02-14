<?php

declare(strict_types=1);

namespace App\Models;

use MWGuerra\FileManager\Models\FileSystemItem as BaseFileSystemItem;

/**
 * Application-specific FileSystemItem model.
 *
 * This model extends the package's FileSystemItem model.
 * Add any custom relationships, methods, or overrides here.
 *
 * After creating this file, update config/filemanager.php:
 * 'model' => \App\Models\FileSystemItem::class,
 *
 * @property int $id
 * @property int|null $parent_id
 * @property string $name
 * @property string $type
 * @property string|null $file_type
 * @property int|null $size
 * @property int|null $duration
 * @property string|null $thumbnail
 * @property string|null $storage_path
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, BaseFileSystemItem> $children
 * @property-read int|null $children_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, BaseFileSystemItem> $descendants
 * @property-read int|null $descendants_count
 * @property-read BaseFileSystemItem|null $parent
 *
 * @method static \MWGuerra\FileManager\Database\Factories\FileSystemItemFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereFileType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereStoragePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereThumbnail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|FileSystemItem whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class FileSystemItem extends BaseFileSystemItem
{
    // Add your custom methods, relationships, or overrides here
    //
    // Examples:
    //
    // /**
    //  * The user who uploaded this file.
    //  */
    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }
    //
    // /**
    //  * Tags attached to this file.
    //  */
    // public function tags()
    // {
    //     return $this->morphToMany(Tag::class, 'taggable');
    // }
    //
    // /**
    //  * Check if user can download this file.
    //  */
    // public function canDownload(User $user): bool
    // {
    //     return $this->user_id === $user->id || $user->isAdmin();
    // }
}
