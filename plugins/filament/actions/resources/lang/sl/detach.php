<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Odstrani povezavo',

        'modal' => [

            'heading' => 'Odstrani povezavo :label',

            'actions' => [

                'detach' => [
                    'label' => 'Odstrani povezavo',
                ],

            ],

        ],

        'notifications' => [

            'detached' => [
                'title' => 'Povezava odstranjena',
            ],

        ],

    ],

    'multiple' => [

        'label' => 'Odstrani povezavo iz izbranih',

        'modal' => [

            'heading' => 'Odstrani povezavo iz izbranih :label',

            'actions' => [

                'detach' => [
                    'label' => 'Odstrani povezavo',
                ],

            ],

        ],

        'notifications' => [

            'detached' => [
                'title' => 'Povezava odstranjena',
            ],

        ],

    ],

];
