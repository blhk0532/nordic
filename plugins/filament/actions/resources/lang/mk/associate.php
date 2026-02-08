<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Поврзи',

        'modal' => [

            'heading' => 'Поврзи :label',

            'fields' => [

                'record_id' => [
                    'label' => 'Запис',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'Поврзи',
                ],

                'associate_another' => [
                    'label' => 'Поврзи и поврзи нов',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'Поврзано',
            ],

        ],

    ],

];
