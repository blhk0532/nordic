<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\CategoryType;
use App\Traits\SubcategoryTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $subcategory_id
 * @property string $sub_name
 * @property int $category_id
 * @property \Carbon\CarbonImmutable|null $deleted_at
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\Category $category
 * @property-read mixed $name
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Income> $income
 * @property-read int|null $income_count
 * @property-read \App\Models\SubcategoryTranslation|null $translation
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\SubcategoryTranslation> $translations
 * @property-read int|null $translations_count
 *
 * @method static Builder<static>|Subcategory income()
 * @method static Builder<static>|Subcategory newModelQuery()
 * @method static Builder<static>|Subcategory newQuery()
 * @method static Builder<static>|Subcategory onlyTrashed()
 * @method static Builder<static>|Subcategory outcome()
 * @method static Builder<static>|Subcategory query()
 * @method static Builder<static>|Subcategory whereCategoryId($value)
 * @method static Builder<static>|Subcategory whereCreatedAt($value)
 * @method static Builder<static>|Subcategory whereDeletedAt($value)
 * @method static Builder<static>|Subcategory whereSubName($value)
 * @method static Builder<static>|Subcategory whereSubcategoryId($value)
 * @method static Builder<static>|Subcategory whereUpdatedAt($value)
 * @method static Builder<static>|Subcategory withTrashed(bool $withTrashed = true)
 * @method static Builder<static>|Subcategory withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Subcategory extends Model
{
    use HasFactory, SoftDeletes, SubcategoryTranslations;

    protected $table = 'subcategories';

    protected $primaryKey = 'subcategory_id';

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    protected $fillable = ['sub_name', 'category_id'];

    public static function searchByCategoryName(string $search): Builder
    {
        return self::query()
            ->whereHas('category', function (Builder $q) use ($search) {
                $q->where('category_type', CategoryType::INCOME)
                    ->where('name', 'like', "%{$search}%");
            })
            ->with('category');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function income(): HasMany
    {
        return $this->hasMany(Income::class, 'subcategory_id');
    }

    public function scopeIncome(Builder $query)
    {
        return $query->whereHas('category', fn ($q) => $q->where('category_type', CategoryType::INCOME->value)
        );
    }

    public function scopeOutcome(Builder $query)
    {
        return $query->whereHas('category', fn ($q) => $q->where('category_type', CategoryType::OUTCOME->value)
        );
    }
}
