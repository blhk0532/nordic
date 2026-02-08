<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Повежи',

        'modal' => [

            'heading' => 'Повежи :label',

            'fields' => [

                'record_id' => [
                    'label' => 'Запис',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'Повежи',
                ],

                'associate_another' => [
                    'label' => 'Повежи и повежи други',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'Повезано',
            ],

        ],

    ],

];
