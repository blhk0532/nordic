<?php

declare(strict_types=1);

namespace App\Models;

use App\Casts\SwedishDateCast;
use App\Enums\Outcomes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string|null $gatuadress
 * @property string|null $postnummer
 * @property string|null $postort
 * @property string|null $forsamling
 * @property string|null $kommun
 * @property string|null $kommun_ratsit
 * @property string|null $lan
 * @property string|null $adressandring
 * @property array<array-key, mixed>|null $telfonnummer
 * @property string|null $stjarntacken
 * @property \Carbon\Carbon|null $fodelsedag
 * @property string|null $personnummer
 * @property string|null $alder
 * @property string|null $kon
 * @property string|null $civilstand
 * @property string|null $fornamn
 * @property string|null $efternamn
 * @property string|null $personnamn
 * @property string|null $telefon
 * @property array<array-key, mixed>|null $epost_adress
 * @property string|null $agandeform
 * @property string|null $bostadstyp
 * @property string|null $boarea
 * @property string|null $byggar
 * @property string|null $fastighet
 * @property array<array-key, mixed>|null $personer
 * @property array<array-key, mixed>|null $foretag
 * @property array<array-key, mixed>|null $grannar
 * @property array<array-key, mixed>|null $fordon
 * @property array<array-key, mixed>|null $hundar
 * @property array<array-key, mixed>|null $bolagsengagemang
 * @property numeric|null $longitude
 * @property numeric|null $latitud
 * @property string|null $google_maps
 * @property string|null $google_streetview
 * @property string|null $ratsit_se
 * @property bool $is_active
 * @property bool $is_hus
 * @property bool $is_telefon
 * @property bool $is_queued
 * @property string|null $status
 * @property \App\Enums\Outcomes|null $outcome
 * @property string|null $outcome_category
 * @property bool $is_outcome
 * @property int $attempts
 * @property int|null $booking_id
 * @property int|null $calendar_id
 * @property \Carbon\CarbonImmutable|null $booked_at
 * @property \Carbon\CarbonImmutable|null $aterkom_at
 * @property \Carbon\CarbonImmutable $available_at
 * @property string|null $user_notes
 * @property string|null $user_id
 * @property string|null $service_user_id
 * @property string $started_at
 * @property string $expires_at
 * @property \Carbon\CarbonImmutable $created_at
 * @property \Carbon\CarbonImmutable $updated_at
 * @property int|null $team_id
 * @property int $retry_count
 * @property-read \App\Models\Booking|null $booking
 * @property-read \App\Models\BookingCalendar|null $calendar
 * @property-read \App\Models\Team|null $team
 * @property-read \App\Models\User|null $user
 *
 * @method static Builder<static>|RingaData active()
 * @method static Builder<static>|RingaData newModelQuery()
 * @method static Builder<static>|RingaData newQuery()
 * @method static Builder<static>|RingaData query()
 * @method static Builder<static>|RingaData whereAdressandring($value)
 * @method static Builder<static>|RingaData whereAgandeform($value)
 * @method static Builder<static>|RingaData whereAlder($value)
 * @method static Builder<static>|RingaData whereAterkomAt($value)
 * @method static Builder<static>|RingaData whereAttempts($value)
 * @method static Builder<static>|RingaData whereAvailableAt($value)
 * @method static Builder<static>|RingaData whereBoarea($value)
 * @method static Builder<static>|RingaData whereBolagsengagemang($value)
 * @method static Builder<static>|RingaData whereBookedAt($value)
 * @method static Builder<static>|RingaData whereBookingId($value)
 * @method static Builder<static>|RingaData whereBostadstyp($value)
 * @method static Builder<static>|RingaData whereByggar($value)
 * @method static Builder<static>|RingaData whereCalendarId($value)
 * @method static Builder<static>|RingaData whereCivilstand($value)
 * @method static Builder<static>|RingaData whereCreatedAt($value)
 * @method static Builder<static>|RingaData whereEfternamn($value)
 * @method static Builder<static>|RingaData whereEpostAdress($value)
 * @method static Builder<static>|RingaData whereExpiresAt($value)
 * @method static Builder<static>|RingaData whereFastighet($value)
 * @method static Builder<static>|RingaData whereFodelsedag($value)
 * @method static Builder<static>|RingaData whereFordon($value)
 * @method static Builder<static>|RingaData whereForetag($value)
 * @method static Builder<static>|RingaData whereFornamn($value)
 * @method static Builder<static>|RingaData whereForsamling($value)
 * @method static Builder<static>|RingaData whereGatuadress($value)
 * @method static Builder<static>|RingaData whereGoogleMaps($value)
 * @method static Builder<static>|RingaData whereGoogleStreetview($value)
 * @method static Builder<static>|RingaData whereGrannar($value)
 * @method static Builder<static>|RingaData whereHundar($value)
 * @method static Builder<static>|RingaData whereId($value)
 * @method static Builder<static>|RingaData whereIsActive($value)
 * @method static Builder<static>|RingaData whereIsHus($value)
 * @method static Builder<static>|RingaData whereIsOutcome($value)
 * @method static Builder<static>|RingaData whereIsQueued($value)
 * @method static Builder<static>|RingaData whereIsTelefon($value)
 * @method static Builder<static>|RingaData whereKommun($value)
 * @method static Builder<static>|RingaData whereKommunRatsit($value)
 * @method static Builder<static>|RingaData whereKon($value)
 * @method static Builder<static>|RingaData whereLan($value)
 * @method static Builder<static>|RingaData whereLatitud($value)
 * @method static Builder<static>|RingaData whereLongitude($value)
 * @method static Builder<static>|RingaData whereOutcome($value)
 * @method static Builder<static>|RingaData whereOutcomeCategory($value)
 * @method static Builder<static>|RingaData wherePersoner($value)
 * @method static Builder<static>|RingaData wherePersonnamn($value)
 * @method static Builder<static>|RingaData wherePersonnummer($value)
 * @method static Builder<static>|RingaData wherePostnummer($value)
 * @method static Builder<static>|RingaData wherePostort($value)
 * @method static Builder<static>|RingaData whereRatsitSe($value)
 * @method static Builder<static>|RingaData whereRetryCount($value)
 * @method static Builder<static>|RingaData whereServiceUserId($value)
 * @method static Builder<static>|RingaData whereStartedAt($value)
 * @method static Builder<static>|RingaData whereStatus($value)
 * @method static Builder<static>|RingaData whereStjarntacken($value)
 * @method static Builder<static>|RingaData whereTeamId($value)
 * @method static Builder<static>|RingaData whereTelefon($value)
 * @method static Builder<static>|RingaData whereTelfonnummer($value)
 * @method static Builder<static>|RingaData whereUpdatedAt($value)
 * @method static Builder<static>|RingaData whereUserId($value)
 * @method static Builder<static>|RingaData whereUserNotes($value)
 *
 * @mixin \Eloquent
 */
class RingaData extends Model
{
    /** @use HasFactory<\Database\Factories\RatsitDataFactory> */
    use HasFactory;

    protected $table = 'ringa_data';

    protected $guarded = [];

    protected $casts = [
        'fodelsedag' => SwedishDateCast::class,
        'telefon' => 'string',
        'telfonnummer' => 'array',
        'epost_adress' => 'array',
        'bolagsengagemang' => 'array',
        'personer' => 'array',
        'foretag' => 'array',
        'grannar' => 'array',
        'fordon' => 'array',
        'hundar' => 'array',
        'is_active' => 'boolean',
        'is_hus' => 'boolean',
        'is_telefon' => 'boolean',
        'is_queued' => 'boolean',
        'is_outcome' => 'boolean',
        'longitude' => 'decimal:7',
        'latitud' => 'decimal:7',
        'attempts' => 'integer',
        'booked_at' => 'datetime',
        'aterkom_at' => 'datetime',
        'available_at' => 'datetime',
        'retry_count' => 'integer',
    ];

    protected $fillable = [
        'gatuadress',
        'postnummer',
        'postort',
        'forsamling',
        'kommun',
        'kommun_ratsit',
        'lan',
        'adressandring',
        'fodelsedag',
        'personnummer',
        'stjarntacken',
        'alder',
        'kon',
        'civilstand',
        'fornamn',
        'efternamn',
        'personnamn',
        'telefon',
        'telfonnummer',
        'epost_adress',
        'bolagsengagemang',
        'agandeform',
        'bostadstyp',
        'boarea',
        'byggar',
        'fastighet',
        'personer',
        'foretag',
        'grannar',
        'fordon',
        'hundar',
        'longitude',
        'latitud',
        'google_maps',
        'google_streetview',
        'ratsit_se',
        'is_active',
        'is_telefon',
        'is_hus',
        'is_queued',
        'is_outcome',
        'user_service_id',
        'user_id',
        'team_id',
        'status',
        'outcome',
        'outcome_category',
        'attempts',
        'booking_id',
        'calendar_id',
        'booked_at',
        'aterkom_at',
        'available_at',
        'started_at',
        'expires_at',
        'user_notes',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id');
    }

    public function calendar()
    {
        return $this->belongsTo(BookingCalendar::class, 'calendar_id');
    }

    /** @return Builder<static> */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Get the outcome attribute as an enum instance.
     */
    public function getOutcomeAttribute($value): ?Outcomes
    {
        if (empty($value)) {
            return null;
        }

        return Outcomes::tryFrom($value);
    }
}
