<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $client_id
 * @property string $lang_code
 * @property string $client_fname
 * @property string $client_lname
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation whereClientFname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation whereClientLname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation whereLangCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClientTranslation whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class ClientTranslation extends Model
{
    protected $table = 'clients_translations';

    protected $fillable = ['client_id', 'lang_code', 'client_fname', 'client_lname'];
}
