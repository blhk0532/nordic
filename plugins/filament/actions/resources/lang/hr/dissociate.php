<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Razdvoji',

        'modal' => [

            'heading' => 'Razdvoji :label',

            'actions' => [

                'dissociate' => [
                    'label' => 'Razdvoji',
                ],

            ],

        ],

        'notifications' => [

            'dissociated' => [
                'title' => 'Razdvojeno',
            ],

        ],

    ],

    'multiple' => [

        'label' => 'Dissociate selected',

        'modal' => [

            'heading' => 'Razdvoji odabrano :label',

            'actions' => [

                'dissociate' => [
                    'label' => 'Razdvoji',
                ],

            ],

        ],

        'notifications' => [

            'dissociated' => [
                'title' => 'Razdvojeno',
            ],

        ],

    ],

];
