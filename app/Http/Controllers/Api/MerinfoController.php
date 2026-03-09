<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Merinfo;
use App\Models\MerinfoData;
use DateTime;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class MerinfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Merinfo::query();

        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        if ($request->has('gender')) {
            $query->where('gender', $request->gender);
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('givenNameOrFirstName', 'like', "%{$search}%")
                    ->orWhere('personalNumber', 'like', "%{$search}%");
            });
        }

        $perPage = min($request->input('per_page', 25), 100);
        $records = $query->paginate($perPage);

        return response()->json($records);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'type' => 'required|string',
            'title' => 'nullable|string',
            'short_uuid' => 'required|string|unique:merinfos,short_uuid',
            'name' => 'required|string',
            'givenNameOrFirstName' => 'required|string',
            'personalNumber' => 'required|string',
            'pnr' => 'nullable|array',
            'address' => 'nullable|array',
            'gender' => 'required|string|in:male,female,other',
            'is_celebrity' => 'boolean',
            'has_company_engagement' => 'boolean',
            'number_plus_count' => 'integer',
            'phone_number' => 'nullable|array',
            'url' => 'required|string',
            'same_address_url' => 'nullable|string',
        ]);

        $record = Merinfo::create($validated);

        return response()->json([
            'message' => 'Record created successfully',
            'data' => $record,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        $record = Merinfo::findOrFail($id);

        return response()->json(['data' => $record]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $record = Merinfo::findOrFail($id);

        $validated = $request->validate([
            'type' => 'sometimes|string',
            'title' => 'nullable|string',
            'short_uuid' => 'sometimes|string|unique:merinfos,short_uuid,'.$id,
            'name' => 'sometimes|string',
            'givenNameOrFirstName' => 'sometimes|string',
            'personalNumber' => 'sometimes|string',
            'pnr' => 'nullable|array',
            'address' => 'nullable|array',
            'gender' => 'sometimes|string|in:male,female,other',
            'is_celebrity' => 'boolean',
            'has_company_engagement' => 'boolean',
            'number_plus_count' => 'integer',
            'phone_number' => 'nullable|array',
            'url' => 'sometimes|string',
            'same_address_url' => 'nullable|string',
        ]);

        $record->update($validated);

        return response()->json([
            'message' => 'Record updated successfully',
            'data' => $record,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        $record = Merinfo::findOrFail($id);
        $record->delete();

        return response()->json(['message' => 'Record deleted successfully']);
    }

    /**
     * Bulk insert/update records from Merinfo API format.
     */
    public function bulkStore(Request $request): JsonResponse
    {
        Log::info('MerinfoController bulkStore called', [
            'ip' => $request->ip(),
            'user_agent' => $request->header('User-Agent'),
        ]);

        $items = $this->extractBulkItems($request);

        Log::info('MerinfoController extractBulkItems result', [
            'items_count' => count($items),
            'first_item' => $items[0] ?? null,
        ]);

        $validated = Validator::make([
            'items' => $items,
        ], [
            'items' => 'required|array|min:1',
            'items.*.short_uuid' => 'nullable|string',
            'items.*.type' => 'nullable|string',
            'items.*.title' => 'nullable|string',
            'items.*.name' => 'nullable|string',
            'items.*.givenNameOrFirstName' => 'nullable|string',
            'items.*.personalNumber' => 'nullable|string',
            'items.*.pnr' => 'nullable|array',
            'items.*.address' => 'nullable|array',
            'items.*.gender' => 'nullable|string',
            'items.*.is_celebrity' => 'nullable|boolean',
            'items.*.has_company_engagement' => 'nullable|boolean',
            'items.*.number_plus_count' => 'nullable|integer',
            'items.*.phone_number' => 'nullable|array',
            'items.*.url' => 'nullable|string',
            'items.*.same_address_url' => 'nullable|string',
        ])->validate();

        Log::info('MerinfoController validation passed', [
            'items_count' => count($validated['items']),
        ]);

        $created = 0;
        $updated = 0;
        $failed = 0;
        $errors = [];
        $merinfoDataCreated = 0;
        $merinfoDataUpdated = 0;

        foreach ($validated['items'] as $itemIndex => $itemData) {
            try {
                $record = Merinfo::updateOrCreate(
                    ['short_uuid' => $itemData['short_uuid']],
                    [
                        'type' => $itemData['type'] ?? null,
                        'title' => $itemData['title'] ?? null,
                        'name' => $itemData['name'] ?? null,
                        'givenNameOrFirstName' => $itemData['givenNameOrFirstName'] ?? null,
                        'personalNumber' => $itemData['personalNumber'] ?? null,
                        'pnr' => $itemData['pnr'] ?? null,
                        'address' => $itemData['address'] ?? null,
                        'gender' => $itemData['gender'] ?? null,
                        'is_celebrity' => $itemData['is_celebrity'] ?? false,
                        'has_company_engagement' => $itemData['has_company_engagement'] ?? false,
                        'number_plus_count' => $itemData['number_plus_count'] ?? 0,
                        'phone_number' => $itemData['phone_number'] ?? null,
                        'url' => $itemData['url'] ?? null,
                        'same_address_url' => $itemData['same_address_url'] ?? null,
                    ]
                );

                $record->wasRecentlyCreated ? $created++ : $updated++;

                $address = $itemData['address'] ?? [];
                $street = is_array($address) && isset($address[0]['street']) ? $address[0]['street'] : ($itemData['gatuadress'] ?? null);
                $zipCode = is_array($address) && isset($address[0]['zip_code']) ? $address[0]['zip_code'] : ($itemData['postnummer'] ?? null);
                $city = is_array($address) && isset($address[0]['city']) ? $address[0]['city'] : ($itemData['postort'] ?? null);
                $phoneNumbers = $itemData['phone_number'] ?? [];
                $phoneRaw = is_array($phoneNumbers) && isset($phoneNumbers[0]['raw']) ? $phoneNumbers[0]['raw'] : ($itemData['telefon'] ?? null);

                $age = $itemData['age'] ?? null;
                $personalNumber = $itemData['personalNumber'] ?? null;
                if (! $age && $personalNumber) {
                    $pnr = preg_replace('/[^0-9]/', '', $personalNumber);
                    if (strlen($pnr) >= 8) {
                        $birthYear = (int) substr($pnr, 0, 4);
                        $birthMonth = (int) substr($pnr, 4, 2);
                        $birthDay = (int) substr($pnr, 6, 2);
                        try {
                            $birthDate = new DateTime("$birthYear-$birthMonth-$birthDay");
                            $today = new DateTime('today');
                            $age = $birthDate->diff($today)->y;
                        } catch (Exception $e) {
                            $age = null;
                        }
                    }
                }

                if ($street) {
                    Log::info('MerinfoController saving to merinfo_data', [
                        'item_index' => $itemIndex,
                        'personnamn' => $itemData['name'] ?? $itemData['personnamn'] ?? null,
                        'gatuadress' => $street,
                        'postnummer' => $zipCode,
                        'postort' => $city,
                        'telefon' => $phoneRaw,
                        'age' => $itemData['age'] ?? null,
                        'gender' => $itemData['gender'] ?? null,
                    ]);

                    $merinfoData = MerinfoData::updateOrCreate(
                        [
                            'personnamn' => $itemData['name'] ?? $itemData['personnamn'] ?? null,
                            'gatuadress' => $street,
                        ],
                        [
                            'personnamn' => $itemData['name'] ?? $itemData['personnamn'] ?? null,
                            'givenNameOrFirstName' => $itemData['givenNameOrFirstName'] ?? null,
                            'alder' => $age,
                            'personalNumber' => $personalNumber,
                            'kon' => $itemData['gender'] ?? null,
                            'gatuadress' => $street,
                            'postnummer' => $zipCode,
                            'postort' => $city,
                            'telefon' => $phoneRaw,
                            'telefoner' => $phoneNumbers,
                            'link' => $itemData['url'] ?? null,
                            'is_telefon' => $itemData['is_telefon'] ?? ($phoneRaw ? true : false),
                            'is_hus' => $itemData['is_hus'] ?? false,
                        ]
                    );

                    $merinfoData->wasRecentlyCreated ? $merinfoDataCreated++ : $merinfoDataUpdated++;
                }
            } catch (Exception $e) {
                $failed++;
                $errors[] = [
                    'item_index' => $itemIndex,
                    'short_uuid' => $itemData['short_uuid'] ?? 'unknown',
                    'error' => $e->getMessage(),
                ];
            }
        }

        Log::info('MerinfoController bulkStore completed', [
            'created' => $created,
            'updated' => $updated,
            'failed' => $failed,
            'merinfo_data_created' => $merinfoDataCreated,
            'merinfo_data_updated' => $merinfoDataUpdated,
            'errors' => $errors,
        ]);

        return response()->json([
            'message' => 'Bulk operation completed',
            'summary' => [
                'total_processed' => count($validated['items']),
                'created' => $created,
                'updated' => $updated,
                'failed' => $failed,
                'merinfo_data_created' => $merinfoDataCreated,
                'merinfo_data_updated' => $merinfoDataUpdated,
            ],
            'errors' => $errors,
        ]);
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function extractBulkItems(Request $request): array
    {
        $payload = $request->all();

        if (array_is_list($payload)) {
            return $payload;
        }

        if (isset($payload['records']) && is_array($payload['records'])) {
            return $payload['records'];
        }

        if (! isset($payload['results']) || ! is_array($payload['results'])) {
            return [];
        }

        $items = [];

        foreach ($payload['results'] as $result) {
            if (isset($result['items']) && is_array($result['items'])) {
                foreach ($result['items'] as $item) {
                    if (is_array($item)) {
                        $items[] = $item;
                    }
                }
            }
        }

        return $items;
    }
}
