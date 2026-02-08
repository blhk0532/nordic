<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Társítás',

        'modal' => [

            'heading' => ':label társítása',

            'fields' => [

                'record_id' => [
                    'label' => 'Elemek',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'Társítás',
                ],

                'associate_another' => [
                    'label' => 'Mentés és új társítása',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'Társítva',
            ],

        ],

    ],

];
