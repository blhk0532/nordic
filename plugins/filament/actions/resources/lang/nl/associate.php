<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Koppelen',

        'modal' => [

            'heading' => ':Label koppelen',

            'fields' => [

                'record_id' => [
                    'label' => 'Record',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'Koppelen',
                ],

                'associate_another' => [
                    'label' => 'Koppelen & nieuwe koppelen',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'Gekoppeld',
            ],

        ],

    ],

];
