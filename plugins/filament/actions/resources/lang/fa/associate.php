<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'ارتباط',

        'modal' => [

            'heading' => 'ارتباط :label',

            'fields' => [

                'record_id' => [
                    'label' => 'رکورد',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'ارتباط',
                ],

                'associate_another' => [
                    'label' => 'ارتباط و ارتباط دیگر',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'مرتبط شد',
            ],

        ],

    ],

];
