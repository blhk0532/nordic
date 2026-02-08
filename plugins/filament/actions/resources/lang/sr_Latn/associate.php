<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Poveži',

        'modal' => [

            'heading' => 'Poveži :label',

            'fields' => [

                'record_id' => [
                    'label' => 'Zapis',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'Poveži',
                ],

                'associate_another' => [
                    'label' => 'Poveži i poveži drugi',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'Povezano',
            ],

        ],

    ],

];
