<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'קשר',

        'modal' => [

            'heading' => 'קשר את :label',

            'fields' => [

                'record_id' => [
                    'label' => 'רשומה',
                ],

            ],

            'actions' => [

                'attach' => [
                    'label' => 'קשר',
                ],

                'attach_another' => [
                    'label' => 'קשר וקשר עוד אחד',
                ],

            ],

        ],

        'notifications' => [

            'attached' => [
                'title' => 'קושר',
            ],

        ],

    ],

];
