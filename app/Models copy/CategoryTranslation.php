<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class CategoryTranslation extends Model
{
    protected $table = 'categories_translations';

    protected $fillable = ['category_id', 'lang_code', 'category_name'];
}
