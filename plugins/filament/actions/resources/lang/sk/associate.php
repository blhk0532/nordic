<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Pripojiť',

        'modal' => [

            'heading' => 'Pripojiť :label',

            'fields' => [

                'record_id' => [
                    'label' => 'Záznam',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'Pripojiť',
                ],

                'associate_another' => [
                    'label' => 'Pripojiť & pripojiť ďalšie',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'Pripojené',
            ],

        ],

    ],

];
