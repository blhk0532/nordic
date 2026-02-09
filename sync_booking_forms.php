<?php

declare(strict_types=1);

$masterPath = '/home/baba/zzz/nuno/app/Filament/App/Clusters/Services/Resources/Bookings/Schemas/BookingForm.php';
$masterCode = file_get_contents($masterPath);

// Find where the namespace ends
$namespaceEnd = mb_strpos($masterCode, ';');
if ($namespaceEnd === false) {
    echo "Master namespace not found\n";
    exit(1);
}
$masterBody = mb_substr($masterCode, $namespaceEnd + 1);

$filesToSync = [
    '/home/baba/zzz/nuno/app/Filament/Clients/Clusters/Services/Resources/Bookings/Schemas/BookingForm.php',
    '/home/baba/zzz/nuno/app/Filament/App/Resources/Bookings/Schemas/BookingForm.php',
    '/home/baba/zzz/nuno/app/Filament/Booking/Clusters/Services/Resources/Bookings/Schemas/BookingForm.php',
    '/home/baba/zzz/nuno/plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Schemas/BookingForm.php',
    '/home/baba/zzz/nuno/plugins/adultdate/filament-shop/src/Filament/Clusters/Services/Resources/Bookings/Schemas/BookingForm.php',
];

foreach ($filesToSync as $file) {
    if (! file_exists($file)) {
        echo "File not found: $file\n";

        continue;
    }

    $oldContent = file_get_contents($file);
    $targetNamespaceEnd = mb_strpos($oldContent, ';');
    if ($targetNamespaceEnd === false) {
        echo "Namespace not found in $file\n";

        continue;
    }

    $namespaceHeader = mb_substr($oldContent, 0, $targetNamespaceEnd + 1);
    $newContent = $namespaceHeader.$masterBody;

    file_put_contents($file, $newContent);
    echo "Synced: $file\n";
}
