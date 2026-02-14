<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $lang_code
 * @property int $subcategory_id
 * @property string $sub_name
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation whereLangCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation whereSubName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation whereSubcategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|SubcategoryTranslation whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class SubcategoryTranslation extends Model
{
    protected $table = 'subcategories_translations';

    protected $fillable = ['subcategory_id', 'lang_code', 'sub_name'];
}
