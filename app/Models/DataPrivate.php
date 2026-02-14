<?php

declare(strict_types=1);

namespace App\Models;

use App\Casts\SwedishDateCast;
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
 * @property string|null $lan
 * @property string|null $adressandring
 * @property string|null $bo_gatuadress
 * @property string|null $bo_postnummer
 * @property string|null $bo_postort
 * @property string|null $bo_forsamling
 * @property string|null $bo_kommun
 * @property string|null $bo_lan
 * @property array<array-key, mixed>|null $telfonnummer
 * @property array<array-key, mixed>|null $telefon
 * @property string|null $stjarntacken
 * @property \Carbon\Carbon|null $fodelsedag
 * @property string|null $personnummer
 * @property string|null $alder
 * @property string|null $kon
 * @property string|null $civilstand
 * @property string|null $fornamn
 * @property string|null $efternamn
 * @property string|null $personnamn
 * @property string|null $ps_fodelsedag
 * @property string|null $ps_personnummer
 * @property string|null $ps_alder
 * @property string|null $ps_kon
 * @property string|null $ps_civilstand
 * @property string|null $ps_fornamn
 * @property string|null $ps_efternamn
 * @property string|null $ps_personnamn
 * @property array<array-key, mixed>|null $ps_telefon
 * @property array<array-key, mixed>|null $ps_epost_adress
 * @property string|null $ps_bolagsengagemang
 * @property string|null $agandeform
 * @property string|null $bostadstyp
 * @property string|null $boarea
 * @property string|null $byggar
 * @property string|null $bo_agandeform
 * @property string|null $bo_bostadstyp
 * @property string|null $bo_boarea
 * @property string|null $bo_byggar
 * @property string|null $bo_fastighet
 * @property string|null $fastighet
 * @property array<array-key, mixed>|null $personer
 * @property array<array-key, mixed>|null $foretag
 * @property array<array-key, mixed>|null $grannar
 * @property array<array-key, mixed>|null $fordon
 * @property array<array-key, mixed>|null $hundar
 * @property array<array-key, mixed>|null $bolagsengagemang
 * @property array<array-key, mixed>|null $epost_adress
 * @property int|null $bo_personer
 * @property int|null $bo_foretag
 * @property string|null $bo_grannar
 * @property string|null $bo_fordon
 * @property string|null $bo_hundar
 * @property string|null $longitude
 * @property string|null $latitud
 * @property string|null $google_maps
 * @property string|null $google_streetview
 * @property string|null $ratsit_link
 * @property string|null $bo_longitude
 * @property string|null $bo_latitud
 * @property string|null $hitta_link
 * @property string|null $hitta_karta
 * @property string|null $bostad_typ
 * @property string|null $bostad_pris
 * @property bool $is_active
 * @property bool $is_update
 * @property \Carbon\CarbonImmutable $created_at
 * @property \Carbon\CarbonImmutable $updated_at
 *
 * @method static Builder<static>|DataPrivate active()
 * @method static Builder<static>|DataPrivate byKommun(string $kommun)
 * @method static Builder<static>|DataPrivate byLan(string $lan)
 * @method static Builder<static>|DataPrivate byPersonnummer(string $personnummer)
 * @method static Builder<static>|DataPrivate byPostnummer(string $postnummer)
 * @method static Builder<static>|DataPrivate byPostort(string $postort)
 * @method static Builder<static>|DataPrivate newModelQuery()
 * @method static Builder<static>|DataPrivate newQuery()
 * @method static Builder<static>|DataPrivate query()
 * @method static Builder<static>|DataPrivate searchByName(string $name)
 * @method static Builder<static>|DataPrivate whereAdressandring($value)
 * @method static Builder<static>|DataPrivate whereAgandeform($value)
 * @method static Builder<static>|DataPrivate whereAlder($value)
 * @method static Builder<static>|DataPrivate whereBoAgandeform($value)
 * @method static Builder<static>|DataPrivate whereBoBoarea($value)
 * @method static Builder<static>|DataPrivate whereBoBostadstyp($value)
 * @method static Builder<static>|DataPrivate whereBoByggar($value)
 * @method static Builder<static>|DataPrivate whereBoFastighet($value)
 * @method static Builder<static>|DataPrivate whereBoFordon($value)
 * @method static Builder<static>|DataPrivate whereBoForetag($value)
 * @method static Builder<static>|DataPrivate whereBoForsamling($value)
 * @method static Builder<static>|DataPrivate whereBoGatuadress($value)
 * @method static Builder<static>|DataPrivate whereBoGrannar($value)
 * @method static Builder<static>|DataPrivate whereBoHundar($value)
 * @method static Builder<static>|DataPrivate whereBoKommun($value)
 * @method static Builder<static>|DataPrivate whereBoLan($value)
 * @method static Builder<static>|DataPrivate whereBoLatitud($value)
 * @method static Builder<static>|DataPrivate whereBoLongitude($value)
 * @method static Builder<static>|DataPrivate whereBoPersoner($value)
 * @method static Builder<static>|DataPrivate whereBoPostnummer($value)
 * @method static Builder<static>|DataPrivate whereBoPostort($value)
 * @method static Builder<static>|DataPrivate whereBoarea($value)
 * @method static Builder<static>|DataPrivate whereBolagsengagemang($value)
 * @method static Builder<static>|DataPrivate whereBostadPris($value)
 * @method static Builder<static>|DataPrivate whereBostadTyp($value)
 * @method static Builder<static>|DataPrivate whereBostadstyp($value)
 * @method static Builder<static>|DataPrivate whereByggar($value)
 * @method static Builder<static>|DataPrivate whereCivilstand($value)
 * @method static Builder<static>|DataPrivate whereCreatedAt($value)
 * @method static Builder<static>|DataPrivate whereEfternamn($value)
 * @method static Builder<static>|DataPrivate whereEpostAdress($value)
 * @method static Builder<static>|DataPrivate whereFastighet($value)
 * @method static Builder<static>|DataPrivate whereFodelsedag($value)
 * @method static Builder<static>|DataPrivate whereFordon($value)
 * @method static Builder<static>|DataPrivate whereForetag($value)
 * @method static Builder<static>|DataPrivate whereFornamn($value)
 * @method static Builder<static>|DataPrivate whereForsamling($value)
 * @method static Builder<static>|DataPrivate whereGatuadress($value)
 * @method static Builder<static>|DataPrivate whereGoogleMaps($value)
 * @method static Builder<static>|DataPrivate whereGoogleStreetview($value)
 * @method static Builder<static>|DataPrivate whereGrannar($value)
 * @method static Builder<static>|DataPrivate whereHittaKarta($value)
 * @method static Builder<static>|DataPrivate whereHittaLink($value)
 * @method static Builder<static>|DataPrivate whereHundar($value)
 * @method static Builder<static>|DataPrivate whereId($value)
 * @method static Builder<static>|DataPrivate whereIsActive($value)
 * @method static Builder<static>|DataPrivate whereIsUpdate($value)
 * @method static Builder<static>|DataPrivate whereKommun($value)
 * @method static Builder<static>|DataPrivate whereKon($value)
 * @method static Builder<static>|DataPrivate whereLan($value)
 * @method static Builder<static>|DataPrivate whereLatitud($value)
 * @method static Builder<static>|DataPrivate whereLongitude($value)
 * @method static Builder<static>|DataPrivate wherePersoner($value)
 * @method static Builder<static>|DataPrivate wherePersonnamn($value)
 * @method static Builder<static>|DataPrivate wherePersonnummer($value)
 * @method static Builder<static>|DataPrivate wherePostnummer($value)
 * @method static Builder<static>|DataPrivate wherePostort($value)
 * @method static Builder<static>|DataPrivate wherePsAlder($value)
 * @method static Builder<static>|DataPrivate wherePsBolagsengagemang($value)
 * @method static Builder<static>|DataPrivate wherePsCivilstand($value)
 * @method static Builder<static>|DataPrivate wherePsEfternamn($value)
 * @method static Builder<static>|DataPrivate wherePsEpostAdress($value)
 * @method static Builder<static>|DataPrivate wherePsFodelsedag($value)
 * @method static Builder<static>|DataPrivate wherePsFornamn($value)
 * @method static Builder<static>|DataPrivate wherePsKon($value)
 * @method static Builder<static>|DataPrivate wherePsPersonnamn($value)
 * @method static Builder<static>|DataPrivate wherePsPersonnummer($value)
 * @method static Builder<static>|DataPrivate wherePsTelefon($value)
 * @method static Builder<static>|DataPrivate whereRatsitLink($value)
 * @method static Builder<static>|DataPrivate whereStjarntacken($value)
 * @method static Builder<static>|DataPrivate whereTelefon($value)
 * @method static Builder<static>|DataPrivate whereTelfonnummer($value)
 * @method static Builder<static>|DataPrivate whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class DataPrivate extends Model
{
    /** @use HasFactory<\Database\Factories\DataPrivateFactory> */
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'private_data';

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'fodelsedag' => SwedishDateCast::class,
        'telefon' => 'array',
        'telfonnummer' => 'array',
        'bolagsengagemang' => 'array',
        'ps_telefon' => 'array',
        'ps_epost_adress' => 'array',
        'epost_adress' => 'array',
        'personer' => 'array',
        'foretag' => 'array',
        'grannar' => 'array',
        'fordon' => 'array',
        'hundar' => 'array',
        'is_active' => 'boolean',
        'is_update' => 'boolean',
        'longitude' => 'string',
        'latitud' => 'string',
    ];

    /**
     * @var array<int, string>
     */
    protected $fillable = [
        // modern names
        'gatuadress',
        'postnummer',
        'postort',
        'forsamling',
        'kommun',
        'lan',
        'adressandring',
        'fodelsedag',
        'personnummer',
        'alder',
        'kon',
        'civilstand',
        'fornamn',
        'efternamn',
        'personnamn',
        'telefon',
        'telfonnummer',
        'bolagsengagemang',
        'agandeform',
        'bostadstyp',
        'boarea',
        'byggar',
        'personer',
        'foretag',
        'grannar',
        'fordon',
        'hundar',
        'longitude',
        'latitud',
        'google_maps',
        'google_streetview',
        'ratsit_link',
        'hitta_link',
        'hitta_karta',
        'bostad_typ',
        'bostad_pris',
        'is_active',
        'is_update',

        // legacy / prefixed names used by tests and legacy clients
        'bo_gatuadress',
        'bo_postnummer',
        'bo_postort',
        'bo_forsamling',
        'bo_kommun',
        'bo_lan',
        'ps_fodelsedag',
        'ps_personnummer',
        'ps_alder',
        'ps_kon',
        'ps_civilstand',
        'ps_fornamn',
        'ps_efternamn',
        'ps_personnamn',
        'ps_telefon',
        'ps_epost_adress',
        'epost_adress',
        'ps_bolagsengagemang',
        'bo_agandeform',
        'bo_bostadstyp',
        'bo_boarea',
        'bo_byggar',
        'bo_fastighet',
        'bo_personer',
        'bo_foretag',
        'bo_grannar',
        'bo_fordon',
        'bo_hundar',
    ];

    /**
     * Scope a query to only include active records.
     *
     * @return Builder<static>
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to filter by postal code.
     *
     * @return Builder<static>
     */
    public function scopeByPostnummer(Builder $query, string $postnummer): Builder
    {
        return $query->where('postnummer', $postnummer);
    }

    /**
     * Scope a query to filter by city.
     *
     * @return Builder<static>
     */
    public function scopeByPostort(Builder $query, string $postort): Builder
    {
        return $query->where('postort', $postort);
    }

    /**
     * Scope a query to filter by municipality.
     *
     * @return Builder<static>
     */
    public function scopeByKommun(Builder $query, string $kommun): Builder
    {
        return $query->where('kommun', $kommun);
    }

    /**
     * Scope a query to filter by state.
     *
     * @return Builder<static>
     */
    public function scopeByLan(Builder $query, string $lan): Builder
    {
        return $query->where('lan', $lan);
    }

    /**
     * Scope a query to filter by personnummer.
     *
     * @return Builder<static>
     */
    public function scopeByPersonnummer(Builder $query, string $personnummer): Builder
    {
        return $query->where('personnummer', $personnummer);
    }

    /**
     * Scope a query to search by person name.
     *
     * @return Builder<static>
     */
    public function scopeSearchByName(Builder $query, string $name): Builder
    {
        return $query->where('personnamn', 'ilike', "%{$name}%")
            ->orWhere('fornamn', 'ilike', "%{$name}%")
            ->orWhere('efternamn', 'ilike', "%{$name}%");
    }
}
