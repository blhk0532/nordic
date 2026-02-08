<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Kaitkan',

        'modal' => [

            'heading' => 'Kaitkan :label',

            'fields' => [

                'record_id' => [
                    'label' => 'Data',
                ],

            ],

            'actions' => [

                'associate' => [
                    'label' => 'Kaitkan',
                ],

                'associate_another' => [
                    'label' => 'Kaitkan & kaitkan lainnya',
                ],

            ],

        ],

        'notifications' => [

            'associated' => [
                'title' => 'Data berhasil dikaitkan',
            ],

        ],

    ],

];
