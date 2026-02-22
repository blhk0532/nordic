<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('ringa_data')) {
            // table already exists, nothing to do
            return;
        }

        Schema::create('ringa_data', function (Blueprint $table) {
            $table->id();
            $table->text('gatuadress')->nullable();
            $table->text('postnummer')->nullable();
            $table->text('postort')->nullable();
            $table->text('forsamling')->nullable();
            $table->text('kommun')->nullable();
            $table->text('kommun_ratsit')->nullable();
            $table->text('lan')->nullable();
            $table->text('adressandring')->nullable();
            $table->json('telfonnummer')->nullable();
            $table->text('stjarntacken')->nullable();
            $table->text('fodelsedag')->nullable();
            $table->text('personnummer')->nullable();
            $table->text('alder')->nullable();
            $table->text('kon')->nullable();
            $table->text('civilstand')->nullable();
            $table->text('fornamn')->nullable();
            $table->text('efternamn')->nullable();
            $table->text('personnamn')->nullable();
            $table->text('telefon')->nullable();
            $table->json('epost_adress')->nullable();
            $table->text('agandeform')->nullable();
            $table->text('bostadstyp')->nullable();
            $table->text('boarea')->nullable();
            $table->text('byggar')->nullable();
            $table->text('fastighet')->nullable();
            $table->json('personer')->nullable();
            $table->json('foretag')->nullable();
            $table->json('grannar')->nullable();
            $table->json('fordon')->nullable();
            $table->json('hundar')->nullable();
            $table->json('bolagsengagemang')->nullable();
            $table->text('longitude')->nullable();
            $table->text('latitud')->nullable();
            $table->text('google_maps')->nullable();
            $table->text('google_streetview')->nullable();
            $table->text('ratsit_se')->nullable();
            $table->tinyInteger('is_active')->default(0);
            $table->tinyInteger('is_hus')->default(0);
            $table->tinyInteger('is_telefon')->default(0);
            $table->tinyInteger('is_queued')->default(0);
            $table->string('status')->nullable();
            $table->string('outcome')->nullable();
            $table->string('outcome_category')->nullable();
            $table->tinyInteger('is_outcome')->default(0);
            $table->integer('attempts')->default(0);
            $table->unsignedBigInteger('booking_id')->nullable();
            $table->unsignedBigInteger('calendar_id')->nullable();
            $table->timestamp('booked_at')->nullable();
            $table->timestamp('aterkom_at')->nullable();
            $table->timestamp('available_at')->nullable();
            $table->text('user_notes')->nullable();
            $table->text('user_id')->nullable();
            $table->text('service_user_id')->nullable();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
            $table->unsignedBigInteger('team_id')->nullable();
            $table->integer('retry_count')->default(0);
            $table->unsignedBigInteger('campaign_id')->nullable()->index();
            $table->unsignedBigInteger('tenant_id')->nullable()->index();

            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
            $table->foreign('tenant_id')->references('id')->on('teams')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ringa_data');
    }
};
