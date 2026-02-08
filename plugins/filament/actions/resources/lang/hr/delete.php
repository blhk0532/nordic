<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Obriši',

        'modal' => [

            'heading' => 'Obriši :label',

            'actions' => [

                'delete' => [
                    'label' => 'Obriši',
                ],

            ],

        ],

        'notifications' => [

            'deleted' => [
                'title' => 'Obrisano',
            ],

        ],

    ],

    'multiple' => [

        'label' => 'Obriši odabrano',

        'modal' => [

            'heading' => 'Obriši odabrano',

            'actions' => [

                'delete' => [
                    'label' => 'Obriši',
                ],

            ],

        ],

        'notifications' => [

            'deleted' => [
                'title' => 'Obrisano',
            ],

        ],

    ],

];
