<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Прикріпити',

        'modal' => [

            'heading' => 'Прикріпити :label',

            'fields' => [

                'record_id' => [
                    'label' => 'Запис',
                ],

            ],

            'actions' => [

                'attach' => [
                    'label' => 'Прикріпити',
                ],

                'attach_another' => [
                    'label' => 'Прикріпити та прикріпити інше',
                ],

            ],

        ],

        'notifications' => [

            'attached' => [
                'title' => 'Прикріплено',
            ],

        ],

    ],

];
