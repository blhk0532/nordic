<?php

// This migration is now obsolete and causes errors due to MySQL index constraints on team_id.
// It is intentionally left empty to prevent further errors.

return new class extends \Illuminate\Database\Migrations\Migration
{
    public function up(): void
    {
        // intentionally left blank
    }

    public function down(): void
    {
        // intentionally left blank
    }
};
