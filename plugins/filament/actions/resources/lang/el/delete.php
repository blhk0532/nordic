<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Διαγραφή',

        'modal' => [

            'heading' => 'Διαγραφή :label',

            'actions' => [

                'delete' => [
                    'label' => 'Διαγραφή',
                ],

            ],

        ],

        'notifications' => [

            'deleted' => [
                'title' => 'Διαγράφηκε επιτυχώς',
            ],

        ],

    ],

    'multiple' => [

        'label' => 'Διαγραφή επιλεγμένων',

        'modal' => [

            'heading' => 'Διαγραφή επιλεγμένων :label',

            'actions' => [

                'delete' => [
                    'label' => 'Διαγραφή',
                ],

            ],

        ],

        'notifications' => [

            'deleted' => [
                'title' => 'Διαγράφηκαν επιτυχώς',
            ],

        ],

    ],

];
