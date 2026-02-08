<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Прикачи',

        'modal' => [

            'heading' => 'Прикачи :label',

            'fields' => [

                'record_id' => [
                    'label' => 'Запис',
                ],

            ],

            'actions' => [

                'attach' => [
                    'label' => 'Прикачи',
                ],

                'attach_another' => [
                    'label' => 'Прикачи и прикачи друг',
                ],

            ],

        ],

        'notifications' => [

            'attached' => [
                'title' => 'Прикачено',
            ],

        ],

    ],

];
