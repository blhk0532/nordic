<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'מחיקה',

        'modal' => [

            'heading' => 'מחיקת :label',

            'actions' => [

                'delete' => [
                    'label' => 'מחק',
                ],

            ],

        ],

        'notifications' => [

            'deleted' => [
                'title' => 'נמחק',
            ],

        ],

    ],

    'multiple' => [

        'label' => 'מחק נבחרים',

        'modal' => [

            'heading' => 'מחק את ה:label שנבחרו',

            'actions' => [

                'delete' => [
                    'label' => 'מחק',
                ],

            ],

        ],

        'notifications' => [

            'deleted' => [
                'title' => 'נמחק',
            ],

        ],

    ],

];
