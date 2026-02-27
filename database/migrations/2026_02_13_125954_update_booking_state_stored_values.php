<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasColumn('booking_bookings', 'state')) {
            return;
        }

        DB::table('booking_bookings')
            ->where('state', 'AdultdateFilamentBookingEnumsPending')
            ->update(['state' => \Adultdate\FilamentBooking\Enums\Pending::class]);

        DB::table('booking_bookings')
            ->where('state', 'AdultdateFilamentBookingEnumsPaid')
            ->update(['state' => \Adultdate\FilamentBooking\Enums\Paid::class]);

        DB::table('booking_bookings')
            ->where('state', 'AdultdateFilamentBookingEnumsFailed')
            ->update(['state' => \Adultdate\FilamentBooking\Enums\Failed::class]);
    }

    public function down(): void
    {
        if (! Schema::hasColumn('booking_bookings', 'state')) {
            return;
        }

        DB::table('booking_bookings')
            ->where('state', \Adultdate\FilamentBooking\Enums\Pending::class)
            ->update(['state' => 'AdultdateFilamentBookingEnumsPending']);

        DB::table('booking_bookings')
            ->where('state', \Adultdate\FilamentBooking\Enums\Paid::class)
            ->update(['state' => 'AdultdateFilamentBookingEnumsPaid']);

        DB::table('booking_bookings')
            ->where('state', \Adultdate\FilamentBooking\Enums\Failed::class)
            ->update(['state' => 'AdultdateFilamentBookingEnumsFailed']);
    }
};
