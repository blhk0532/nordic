<?php

declare(strict_types=1);

namespace App\Models;

use AdultDate\FilamentWirechat\Enums\Actions;
use Adultdate\Wirechat\Facades\Wirechat;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * @property int $id
 * @property int $actionable_id
 * @property string $actionable_type
 * @property int $actor_id
 * @property string $actor_type
 * @property Actions $type
 * @property string|null $data Some additional information about the action
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read Model|\Eloquent $actionable
 * @property-read Model|\Eloquent $actor
 *
 * @method static \AdultDate\FilamentWirechat\Database\Factories\ActionFactory factory($count = null, $state = [])
 * @method static Builder<static>|Action newModelQuery()
 * @method static Builder<static>|Action newQuery()
 * @method static Builder<static>|Action query()
 * @method static Builder<static>|Action whereActionableId($value)
 * @method static Builder<static>|Action whereActionableType($value)
 * @method static Builder<static>|Action whereActor(\Illuminate\Database\Eloquent\Model $actor)
 * @method static Builder<static>|Action whereActorId($value)
 * @method static Builder<static>|Action whereActorType($value)
 * @method static Builder<static>|Action whereCreatedAt($value)
 * @method static Builder<static>|Action whereData($value)
 * @method static Builder<static>|Action whereId($value)
 * @method static Builder<static>|Action whereType($value)
 * @method static Builder<static>|Action whereUpdatedAt($value)
 * @method static Builder<static>|Action withoutActor(\Illuminate\Database\Eloquent\Model $user)
 *
 * @mixin Eloquent
 */
class Action extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table;

    protected $fillable = [
        'actor_id',
        'actor_type',
        'actionable_id',
        'actionable_type',
        'type',
        'data',
    ];

    protected $casts = [
        'type' => Actions::class,
    ];

    public function __construct(array $attributes = [])
    {
        $this->table = Wirechat::formatTableName('actions');

        parent::__construct($attributes);
    }

    /**
     * Get the table associated with the model.
     */
    public function getTable(): string
    {
        if (! $this->table) {
            $this->table = Wirechat::formatTableName('actions');
        }

        return $this->table;
    }

    /**
     * Get a new query builder instance for the model.
     *
     * @return Builder
     */
    public function newQuery()
    {
        // Ensure table is set before creating query builder
        if (! $this->table) {
            $this->table = Wirechat::formatTableName('actions');
        }

        return parent::newQuery();
    }

    // Polymorphic relationship to the entity being acted upon (message, conversation, etc.)
    public function actionable(): MorphTo
    {
        return $this->morphTo(null, 'actionable_type', 'actionable_id', 'id');
    }

    // Polymorphic relationship to the actor (User, Admin, etc.)
    public function actor(): MorphTo
    {
        return $this->morphTo('actor', 'actor_type', 'actor_id', 'id');
    }

    // scope by Actor
    public function scopeWhereActor(Builder $query, Model $actor)
    {

        $query->where('actor_id', $actor->getKey())->where('actor_type', $actor->getMorphClass());

    }

    /**
     * Exclude participant passed as parameter
     */
    public function scopeWithoutActor($query, Model $user): Builder
    {

        return $query->where(function ($query) use ($user) {
            $query->where('actor_id', '<>', $user->getKey())
                ->orWhere('actor_type', '<>', $user->getMorphClass());
        });

        //  return $query->where(function ($query) use ($user) {
        //      $query->whereNot('participantable_id', $user->id)
        //            ->orWhereNot('participantable_type', $user->getMorphClass());
        //  });
    }

    /**
     * since you have a non-standard namespace;
     * the resolver cannot guess the correct namespace for your Factory class.
     * so we exlicilty tell it the correct namespace
     */
    protected static function newFactory()
    {
        return \AdultDate\FilamentWirechat\Database\Factories\ActionFactory::new();
    }
}
