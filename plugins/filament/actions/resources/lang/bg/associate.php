<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Асоцииране',

        'modal' => [

            'heading' => 'Асоциирай :label',

            'fields' => [

                'record_id' => [
                    'label' => 'Запис',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'Асоциирай',
                ],

                'associate_another' => [
                    'label' => 'Асоциирай и асоциирай друг',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'Асоциирано',
            ],

        ],

    ],

];
