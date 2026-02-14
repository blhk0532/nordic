<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $category_id
 * @property string $lang_code
 * @property string $category_name
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation whereCategoryName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation whereLangCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CategoryTranslation whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class CategoryTranslation extends Model
{
    protected $table = 'categories_translations';

    protected $fillable = ['category_id', 'lang_code', 'category_name'];
}
