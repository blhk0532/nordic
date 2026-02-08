<?php

declare(strict_types=1);

return [

    'single' => [

        'label' => 'Відокремити',

        'modal' => [

            'heading' => 'Відокремлено :label',

            'actions' => [

                'dissociate' => [
                    'label' => 'Відокремити',
                ],

            ],

        ],

        'notifications' => [

            'dissociated' => [
                'title' => 'Відокремлено',
            ],

        ],

    ],

    'multiple' => [

        'label' => 'Відокремити вибране',

        'modal' => [

            'heading' => 'Відокремити вибране :label',

            'actions' => [

                'dissociate' => [
                    'label' => 'Відокремити',
                ],

            ],

        ],

        'notifications' => [

            'dissociated' => [
                'title' => 'Відокремлено',
            ],

        ],

    ],

];
