<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Odvojite',

        'modal' => [

            'heading' => 'Odvojite :label',

            'actions' => [

                'dissociate' => [
                    'label' => 'Odvojite',
                ],

            ],

        ],

        'notifications' => [

            'dissociated' => [
                'title' => 'Odvojeno',
            ],

        ],

    ],

    'multiple' => [

        'label' => 'Odvojite izabrani',

        'modal' => [

            'heading' => 'Odvojite izabrani :label',

            'actions' => [

                'dissociate' => [
                    'label' => 'Odvojite izabrani',
                ],

            ],

        ],

        'notifications' => [

            'dissociated' => [
                'title' => 'Odvojeno',
            ],

        ],

    ],

];
