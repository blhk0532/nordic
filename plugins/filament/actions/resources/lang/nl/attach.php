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

                'attach' => [
                    'label' => 'Koppelen',
                ],

                'attach_another' => [
                    'label' => 'Koppelen & nieuwe koppelen',
                ],

            ],

        ],

        'notifications' => [

            'attached' => [
                'title' => 'Gekoppeld',
            ],

        ],

    ],

];
