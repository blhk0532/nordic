import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/admin/password-reset/reset'
*/
const ResetPasswordb2da300647e6611f1437d70402620a59 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordb2da300647e6611f1437d70402620a59.url(options),
    method: 'get',
})

ResetPasswordb2da300647e6611f1437d70402620a59.definition = {
    methods: ["get","head"],
    url: '/nds/admin/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/admin/password-reset/reset'
*/
ResetPasswordb2da300647e6611f1437d70402620a59.url = (options?: RouteQueryOptions) => {
    return ResetPasswordb2da300647e6611f1437d70402620a59.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/admin/password-reset/reset'
*/
ResetPasswordb2da300647e6611f1437d70402620a59.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordb2da300647e6611f1437d70402620a59.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/admin/password-reset/reset'
*/
ResetPasswordb2da300647e6611f1437d70402620a59.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordb2da300647e6611f1437d70402620a59.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/admin/password-reset/reset'
*/
const ResetPasswordb2da300647e6611f1437d70402620a59Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordb2da300647e6611f1437d70402620a59.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/admin/password-reset/reset'
*/
ResetPasswordb2da300647e6611f1437d70402620a59Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordb2da300647e6611f1437d70402620a59.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/admin/password-reset/reset'
*/
ResetPasswordb2da300647e6611f1437d70402620a59Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordb2da300647e6611f1437d70402620a59.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordb2da300647e6611f1437d70402620a59.form = ResetPasswordb2da300647e6611f1437d70402620a59Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
const ResetPassworde958504616843ced0a5bec0ef9eee292 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

ResetPassworde958504616843ced0a5bec0ef9eee292.definition = {
    methods: ["get","head"],
    url: '/nds/app/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.url = (options?: RouteQueryOptions) => {
    return ResetPassworde958504616843ced0a5bec0ef9eee292.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
const ResetPassworde958504616843ced0a5bec0ef9eee292Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassworde958504616843ced0a5bec0ef9eee292.form = ResetPassworde958504616843ced0a5bec0ef9eee292Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
const ResetPassword4f89c44c35a7c227994d42b0f3b12f3c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'get',
})

ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url = (options?: RouteQueryOptions) => {
    return ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
const ResetPassword4f89c44c35a7c227994d42b0f3b12f3cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.form = ResetPassword4f89c44c35a7c227994d42b0f3b12f3cForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
const ResetPassword570063cd6633a1432398e8411983d0ed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

ResetPassword570063cd6633a1432398e8411983d0ed.definition = {
    methods: ["get","head"],
    url: '/nds/chat/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.url = (options?: RouteQueryOptions) => {
    return ResetPassword570063cd6633a1432398e8411983d0ed.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
const ResetPassword570063cd6633a1432398e8411983d0edForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0edForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0edForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword570063cd6633a1432398e8411983d0ed.form = ResetPassword570063cd6633a1432398e8411983d0edForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/clients/password-reset/reset'
*/
const ResetPasswordff8799d13e4eb815601fc006a73d8cd6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordff8799d13e4eb815601fc006a73d8cd6.url(options),
    method: 'get',
})

ResetPasswordff8799d13e4eb815601fc006a73d8cd6.definition = {
    methods: ["get","head"],
    url: '/nds/clients/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/clients/password-reset/reset'
*/
ResetPasswordff8799d13e4eb815601fc006a73d8cd6.url = (options?: RouteQueryOptions) => {
    return ResetPasswordff8799d13e4eb815601fc006a73d8cd6.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/clients/password-reset/reset'
*/
ResetPasswordff8799d13e4eb815601fc006a73d8cd6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordff8799d13e4eb815601fc006a73d8cd6.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/clients/password-reset/reset'
*/
ResetPasswordff8799d13e4eb815601fc006a73d8cd6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordff8799d13e4eb815601fc006a73d8cd6.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/clients/password-reset/reset'
*/
const ResetPasswordff8799d13e4eb815601fc006a73d8cd6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordff8799d13e4eb815601fc006a73d8cd6.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/clients/password-reset/reset'
*/
ResetPasswordff8799d13e4eb815601fc006a73d8cd6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordff8799d13e4eb815601fc006a73d8cd6.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/clients/password-reset/reset'
*/
ResetPasswordff8799d13e4eb815601fc006a73d8cd6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordff8799d13e4eb815601fc006a73d8cd6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordff8799d13e4eb815601fc006a73d8cd6.form = ResetPasswordff8799d13e4eb815601fc006a73d8cd6Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/content/password-reset/reset'
*/
const ResetPasswordd6bb3f8c0674d57b3669e59df9463511 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordd6bb3f8c0674d57b3669e59df9463511.url(options),
    method: 'get',
})

ResetPasswordd6bb3f8c0674d57b3669e59df9463511.definition = {
    methods: ["get","head"],
    url: '/nds/content/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/content/password-reset/reset'
*/
ResetPasswordd6bb3f8c0674d57b3669e59df9463511.url = (options?: RouteQueryOptions) => {
    return ResetPasswordd6bb3f8c0674d57b3669e59df9463511.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/content/password-reset/reset'
*/
ResetPasswordd6bb3f8c0674d57b3669e59df9463511.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordd6bb3f8c0674d57b3669e59df9463511.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/content/password-reset/reset'
*/
ResetPasswordd6bb3f8c0674d57b3669e59df9463511.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordd6bb3f8c0674d57b3669e59df9463511.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/content/password-reset/reset'
*/
const ResetPasswordd6bb3f8c0674d57b3669e59df9463511Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordd6bb3f8c0674d57b3669e59df9463511.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/content/password-reset/reset'
*/
ResetPasswordd6bb3f8c0674d57b3669e59df9463511Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordd6bb3f8c0674d57b3669e59df9463511.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/content/password-reset/reset'
*/
ResetPasswordd6bb3f8c0674d57b3669e59df9463511Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordd6bb3f8c0674d57b3669e59df9463511.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordd6bb3f8c0674d57b3669e59df9463511.form = ResetPasswordd6bb3f8c0674d57b3669e59df9463511Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
const ResetPasswordf19594ec2410f93dd79b5c8ca9330d53 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'get',
})

ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.definition = {
    methods: ["get","head"],
    url: '/nds/dev/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url = (options?: RouteQueryOptions) => {
    return ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
const ResetPasswordf19594ec2410f93dd79b5c8ca9330d53Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.form = ResetPasswordf19594ec2410f93dd79b5c8ca9330d53Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dialer/password-reset/reset'
*/
const ResetPassword274b6e9d9c4893b54da840034b41a817 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword274b6e9d9c4893b54da840034b41a817.url(options),
    method: 'get',
})

ResetPassword274b6e9d9c4893b54da840034b41a817.definition = {
    methods: ["get","head"],
    url: '/nds/dialer/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dialer/password-reset/reset'
*/
ResetPassword274b6e9d9c4893b54da840034b41a817.url = (options?: RouteQueryOptions) => {
    return ResetPassword274b6e9d9c4893b54da840034b41a817.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dialer/password-reset/reset'
*/
ResetPassword274b6e9d9c4893b54da840034b41a817.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword274b6e9d9c4893b54da840034b41a817.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dialer/password-reset/reset'
*/
ResetPassword274b6e9d9c4893b54da840034b41a817.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword274b6e9d9c4893b54da840034b41a817.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dialer/password-reset/reset'
*/
const ResetPassword274b6e9d9c4893b54da840034b41a817Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword274b6e9d9c4893b54da840034b41a817.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dialer/password-reset/reset'
*/
ResetPassword274b6e9d9c4893b54da840034b41a817Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword274b6e9d9c4893b54da840034b41a817.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dialer/password-reset/reset'
*/
ResetPassword274b6e9d9c4893b54da840034b41a817Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword274b6e9d9c4893b54da840034b41a817.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword274b6e9d9c4893b54da840034b41a817.form = ResetPassword274b6e9d9c4893b54da840034b41a817Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
const ResetPassword6124c04be7fd20421395a9b0dab3d314 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'get',
})

ResetPassword6124c04be7fd20421395a9b0dab3d314.definition = {
    methods: ["get","head"],
    url: '/nds/email/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314.url = (options?: RouteQueryOptions) => {
    return ResetPassword6124c04be7fd20421395a9b0dab3d314.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
const ResetPassword6124c04be7fd20421395a9b0dab3d314Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6124c04be7fd20421395a9b0dab3d314.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword6124c04be7fd20421395a9b0dab3d314.form = ResetPassword6124c04be7fd20421395a9b0dab3d314Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
const ResetPasswordffad7df53d54e0786e5600f20deebbcb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'get',
})

ResetPasswordffad7df53d54e0786e5600f20deebbcb.definition = {
    methods: ["get","head"],
    url: '/nds/files/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcb.url = (options?: RouteQueryOptions) => {
    return ResetPasswordffad7df53d54e0786e5600f20deebbcb.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
const ResetPasswordffad7df53d54e0786e5600f20deebbcbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordffad7df53d54e0786e5600f20deebbcb.form = ResetPasswordffad7df53d54e0786e5600f20deebbcbForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/finance/password-reset/reset'
*/
const ResetPasswordead096dafb71df6731c5463af733aad1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordead096dafb71df6731c5463af733aad1.url(options),
    method: 'get',
})

ResetPasswordead096dafb71df6731c5463af733aad1.definition = {
    methods: ["get","head"],
    url: '/nds/finance/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/finance/password-reset/reset'
*/
ResetPasswordead096dafb71df6731c5463af733aad1.url = (options?: RouteQueryOptions) => {
    return ResetPasswordead096dafb71df6731c5463af733aad1.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/finance/password-reset/reset'
*/
ResetPasswordead096dafb71df6731c5463af733aad1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordead096dafb71df6731c5463af733aad1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/finance/password-reset/reset'
*/
ResetPasswordead096dafb71df6731c5463af733aad1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordead096dafb71df6731c5463af733aad1.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/finance/password-reset/reset'
*/
const ResetPasswordead096dafb71df6731c5463af733aad1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordead096dafb71df6731c5463af733aad1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/finance/password-reset/reset'
*/
ResetPasswordead096dafb71df6731c5463af733aad1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordead096dafb71df6731c5463af733aad1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/finance/password-reset/reset'
*/
ResetPasswordead096dafb71df6731c5463af733aad1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordead096dafb71df6731c5463af733aad1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordead096dafb71df6731c5463af733aad1.form = ResetPasswordead096dafb71df6731c5463af733aad1Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/locale/password-reset/reset'
*/
const ResetPasswordddcdeb782d1038fca4880531f000cdd9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordddcdeb782d1038fca4880531f000cdd9.url(options),
    method: 'get',
})

ResetPasswordddcdeb782d1038fca4880531f000cdd9.definition = {
    methods: ["get","head"],
    url: '/nds/locale/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/locale/password-reset/reset'
*/
ResetPasswordddcdeb782d1038fca4880531f000cdd9.url = (options?: RouteQueryOptions) => {
    return ResetPasswordddcdeb782d1038fca4880531f000cdd9.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/locale/password-reset/reset'
*/
ResetPasswordddcdeb782d1038fca4880531f000cdd9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordddcdeb782d1038fca4880531f000cdd9.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/locale/password-reset/reset'
*/
ResetPasswordddcdeb782d1038fca4880531f000cdd9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordddcdeb782d1038fca4880531f000cdd9.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/locale/password-reset/reset'
*/
const ResetPasswordddcdeb782d1038fca4880531f000cdd9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordddcdeb782d1038fca4880531f000cdd9.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/locale/password-reset/reset'
*/
ResetPasswordddcdeb782d1038fca4880531f000cdd9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordddcdeb782d1038fca4880531f000cdd9.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/locale/password-reset/reset'
*/
ResetPasswordddcdeb782d1038fca4880531f000cdd9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordddcdeb782d1038fca4880531f000cdd9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordddcdeb782d1038fca4880531f000cdd9.form = ResetPasswordddcdeb782d1038fca4880531f000cdd9Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/manager/password-reset/reset'
*/
const ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.url(options),
    method: 'get',
})

ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.definition = {
    methods: ["get","head"],
    url: '/nds/manager/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/manager/password-reset/reset'
*/
ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.url = (options?: RouteQueryOptions) => {
    return ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/manager/password-reset/reset'
*/
ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/manager/password-reset/reset'
*/
ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/manager/password-reset/reset'
*/
const ResetPassword19ac0c70ac1ea57f1de4040bae9ae75fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/manager/password-reset/reset'
*/
ResetPassword19ac0c70ac1ea57f1de4040bae9ae75fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/manager/password-reset/reset'
*/
ResetPassword19ac0c70ac1ea57f1de4040bae9ae75fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f.form = ResetPassword19ac0c70ac1ea57f1de4040bae9ae75fForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
const ResetPassword6a9da8deec0604263ef565cbc5eb49cd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

ResetPassword6a9da8deec0604263ef565cbc5eb49cd.definition = {
    methods: ["get","head"],
    url: '/nds/notify/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url = (options?: RouteQueryOptions) => {
    return ResetPassword6a9da8deec0604263ef565cbc5eb49cd.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
const ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword6a9da8deec0604263ef565cbc5eb49cd.form = ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/oauth/password-reset/reset'
*/
const ResetPassword6d2cf8fbba6cd494e781784f261b718b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6d2cf8fbba6cd494e781784f261b718b.url(options),
    method: 'get',
})

ResetPassword6d2cf8fbba6cd494e781784f261b718b.definition = {
    methods: ["get","head"],
    url: '/nds/oauth/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/oauth/password-reset/reset'
*/
ResetPassword6d2cf8fbba6cd494e781784f261b718b.url = (options?: RouteQueryOptions) => {
    return ResetPassword6d2cf8fbba6cd494e781784f261b718b.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/oauth/password-reset/reset'
*/
ResetPassword6d2cf8fbba6cd494e781784f261b718b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6d2cf8fbba6cd494e781784f261b718b.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/oauth/password-reset/reset'
*/
ResetPassword6d2cf8fbba6cd494e781784f261b718b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword6d2cf8fbba6cd494e781784f261b718b.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/oauth/password-reset/reset'
*/
const ResetPassword6d2cf8fbba6cd494e781784f261b718bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6d2cf8fbba6cd494e781784f261b718b.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/oauth/password-reset/reset'
*/
ResetPassword6d2cf8fbba6cd494e781784f261b718bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6d2cf8fbba6cd494e781784f261b718b.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/oauth/password-reset/reset'
*/
ResetPassword6d2cf8fbba6cd494e781784f261b718bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6d2cf8fbba6cd494e781784f261b718b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword6d2cf8fbba6cd494e781784f261b718b.form = ResetPassword6d2cf8fbba6cd494e781784f261b718bForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/partner/password-reset/reset'
*/
const ResetPassword41e4de70d56e9f75eddf1001bb79953e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword41e4de70d56e9f75eddf1001bb79953e.url(options),
    method: 'get',
})

ResetPassword41e4de70d56e9f75eddf1001bb79953e.definition = {
    methods: ["get","head"],
    url: '/nds/partner/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/partner/password-reset/reset'
*/
ResetPassword41e4de70d56e9f75eddf1001bb79953e.url = (options?: RouteQueryOptions) => {
    return ResetPassword41e4de70d56e9f75eddf1001bb79953e.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/partner/password-reset/reset'
*/
ResetPassword41e4de70d56e9f75eddf1001bb79953e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword41e4de70d56e9f75eddf1001bb79953e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/partner/password-reset/reset'
*/
ResetPassword41e4de70d56e9f75eddf1001bb79953e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword41e4de70d56e9f75eddf1001bb79953e.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/partner/password-reset/reset'
*/
const ResetPassword41e4de70d56e9f75eddf1001bb79953eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword41e4de70d56e9f75eddf1001bb79953e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/partner/password-reset/reset'
*/
ResetPassword41e4de70d56e9f75eddf1001bb79953eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword41e4de70d56e9f75eddf1001bb79953e.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/partner/password-reset/reset'
*/
ResetPassword41e4de70d56e9f75eddf1001bb79953eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword41e4de70d56e9f75eddf1001bb79953e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword41e4de70d56e9f75eddf1001bb79953e.form = ResetPassword41e4de70d56e9f75eddf1001bb79953eForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/plugins/password-reset/reset'
*/
const ResetPasswordec450f49f89953a94b16f3ba0ac24d14 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordec450f49f89953a94b16f3ba0ac24d14.url(options),
    method: 'get',
})

ResetPasswordec450f49f89953a94b16f3ba0ac24d14.definition = {
    methods: ["get","head"],
    url: '/nds/plugins/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/plugins/password-reset/reset'
*/
ResetPasswordec450f49f89953a94b16f3ba0ac24d14.url = (options?: RouteQueryOptions) => {
    return ResetPasswordec450f49f89953a94b16f3ba0ac24d14.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/plugins/password-reset/reset'
*/
ResetPasswordec450f49f89953a94b16f3ba0ac24d14.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordec450f49f89953a94b16f3ba0ac24d14.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/plugins/password-reset/reset'
*/
ResetPasswordec450f49f89953a94b16f3ba0ac24d14.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordec450f49f89953a94b16f3ba0ac24d14.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/plugins/password-reset/reset'
*/
const ResetPasswordec450f49f89953a94b16f3ba0ac24d14Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordec450f49f89953a94b16f3ba0ac24d14.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/plugins/password-reset/reset'
*/
ResetPasswordec450f49f89953a94b16f3ba0ac24d14Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordec450f49f89953a94b16f3ba0ac24d14.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/plugins/password-reset/reset'
*/
ResetPasswordec450f49f89953a94b16f3ba0ac24d14Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordec450f49f89953a94b16f3ba0ac24d14.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordec450f49f89953a94b16f3ba0ac24d14.form = ResetPasswordec450f49f89953a94b16f3ba0ac24d14Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/private/password-reset/reset'
*/
const ResetPassword1391970fbcfd41c7177d9a0883a40e0b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword1391970fbcfd41c7177d9a0883a40e0b.url(options),
    method: 'get',
})

ResetPassword1391970fbcfd41c7177d9a0883a40e0b.definition = {
    methods: ["get","head"],
    url: '/nds/private/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/private/password-reset/reset'
*/
ResetPassword1391970fbcfd41c7177d9a0883a40e0b.url = (options?: RouteQueryOptions) => {
    return ResetPassword1391970fbcfd41c7177d9a0883a40e0b.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/private/password-reset/reset'
*/
ResetPassword1391970fbcfd41c7177d9a0883a40e0b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword1391970fbcfd41c7177d9a0883a40e0b.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/private/password-reset/reset'
*/
ResetPassword1391970fbcfd41c7177d9a0883a40e0b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword1391970fbcfd41c7177d9a0883a40e0b.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/private/password-reset/reset'
*/
const ResetPassword1391970fbcfd41c7177d9a0883a40e0bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword1391970fbcfd41c7177d9a0883a40e0b.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/private/password-reset/reset'
*/
ResetPassword1391970fbcfd41c7177d9a0883a40e0bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword1391970fbcfd41c7177d9a0883a40e0b.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/private/password-reset/reset'
*/
ResetPassword1391970fbcfd41c7177d9a0883a40e0bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword1391970fbcfd41c7177d9a0883a40e0b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword1391970fbcfd41c7177d9a0883a40e0b.form = ResetPassword1391970fbcfd41c7177d9a0883a40e0bForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/product/password-reset/reset'
*/
const ResetPasswordedd129cce67fd89ec54b3028a20103da = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordedd129cce67fd89ec54b3028a20103da.url(options),
    method: 'get',
})

ResetPasswordedd129cce67fd89ec54b3028a20103da.definition = {
    methods: ["get","head"],
    url: '/nds/product/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/product/password-reset/reset'
*/
ResetPasswordedd129cce67fd89ec54b3028a20103da.url = (options?: RouteQueryOptions) => {
    return ResetPasswordedd129cce67fd89ec54b3028a20103da.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/product/password-reset/reset'
*/
ResetPasswordedd129cce67fd89ec54b3028a20103da.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordedd129cce67fd89ec54b3028a20103da.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/product/password-reset/reset'
*/
ResetPasswordedd129cce67fd89ec54b3028a20103da.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordedd129cce67fd89ec54b3028a20103da.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/product/password-reset/reset'
*/
const ResetPasswordedd129cce67fd89ec54b3028a20103daForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordedd129cce67fd89ec54b3028a20103da.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/product/password-reset/reset'
*/
ResetPasswordedd129cce67fd89ec54b3028a20103daForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordedd129cce67fd89ec54b3028a20103da.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/product/password-reset/reset'
*/
ResetPasswordedd129cce67fd89ec54b3028a20103daForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordedd129cce67fd89ec54b3028a20103da.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordedd129cce67fd89ec54b3028a20103da.form = ResetPasswordedd129cce67fd89ec54b3028a20103daForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
const ResetPasswordcf521fc621685c836f501a4befdd5e86 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'get',
})

ResetPasswordcf521fc621685c836f501a4befdd5e86.definition = {
    methods: ["get","head"],
    url: '/nds/queue/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86.url = (options?: RouteQueryOptions) => {
    return ResetPasswordcf521fc621685c836f501a4befdd5e86.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
const ResetPasswordcf521fc621685c836f501a4befdd5e86Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordcf521fc621685c836f501a4befdd5e86.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordcf521fc621685c836f501a4befdd5e86.form = ResetPasswordcf521fc621685c836f501a4befdd5e86Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/script/password-reset/reset'
*/
const ResetPassword2d2fdb20b1a61d3b6447efe2997d774f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.url(options),
    method: 'get',
})

ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.definition = {
    methods: ["get","head"],
    url: '/nds/script/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/script/password-reset/reset'
*/
ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.url = (options?: RouteQueryOptions) => {
    return ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/script/password-reset/reset'
*/
ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/script/password-reset/reset'
*/
ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/script/password-reset/reset'
*/
const ResetPassword2d2fdb20b1a61d3b6447efe2997d774fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/script/password-reset/reset'
*/
ResetPassword2d2fdb20b1a61d3b6447efe2997d774fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/script/password-reset/reset'
*/
ResetPassword2d2fdb20b1a61d3b6447efe2997d774fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword2d2fdb20b1a61d3b6447efe2997d774f.form = ResetPassword2d2fdb20b1a61d3b6447efe2997d774fForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/server/password-reset/reset'
*/
const ResetPassword16a7bda364935b972ee611b270694efa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword16a7bda364935b972ee611b270694efa.url(options),
    method: 'get',
})

ResetPassword16a7bda364935b972ee611b270694efa.definition = {
    methods: ["get","head"],
    url: '/nds/server/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/server/password-reset/reset'
*/
ResetPassword16a7bda364935b972ee611b270694efa.url = (options?: RouteQueryOptions) => {
    return ResetPassword16a7bda364935b972ee611b270694efa.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/server/password-reset/reset'
*/
ResetPassword16a7bda364935b972ee611b270694efa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword16a7bda364935b972ee611b270694efa.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/server/password-reset/reset'
*/
ResetPassword16a7bda364935b972ee611b270694efa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword16a7bda364935b972ee611b270694efa.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/server/password-reset/reset'
*/
const ResetPassword16a7bda364935b972ee611b270694efaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword16a7bda364935b972ee611b270694efa.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/server/password-reset/reset'
*/
ResetPassword16a7bda364935b972ee611b270694efaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword16a7bda364935b972ee611b270694efa.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/server/password-reset/reset'
*/
ResetPassword16a7bda364935b972ee611b270694efaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword16a7bda364935b972ee611b270694efa.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword16a7bda364935b972ee611b270694efa.form = ResetPassword16a7bda364935b972ee611b270694efaForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/service/password-reset/reset'
*/
const ResetPassword23347f22437356a6a26b363fa00f63d6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword23347f22437356a6a26b363fa00f63d6.url(options),
    method: 'get',
})

ResetPassword23347f22437356a6a26b363fa00f63d6.definition = {
    methods: ["get","head"],
    url: '/nds/service/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/service/password-reset/reset'
*/
ResetPassword23347f22437356a6a26b363fa00f63d6.url = (options?: RouteQueryOptions) => {
    return ResetPassword23347f22437356a6a26b363fa00f63d6.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/service/password-reset/reset'
*/
ResetPassword23347f22437356a6a26b363fa00f63d6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword23347f22437356a6a26b363fa00f63d6.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/service/password-reset/reset'
*/
ResetPassword23347f22437356a6a26b363fa00f63d6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword23347f22437356a6a26b363fa00f63d6.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/service/password-reset/reset'
*/
const ResetPassword23347f22437356a6a26b363fa00f63d6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword23347f22437356a6a26b363fa00f63d6.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/service/password-reset/reset'
*/
ResetPassword23347f22437356a6a26b363fa00f63d6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword23347f22437356a6a26b363fa00f63d6.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/service/password-reset/reset'
*/
ResetPassword23347f22437356a6a26b363fa00f63d6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword23347f22437356a6a26b363fa00f63d6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword23347f22437356a6a26b363fa00f63d6.form = ResetPassword23347f22437356a6a26b363fa00f63d6Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/sheets/password-reset/reset'
*/
const ResetPassword0e7254edf7bb0cf48d0fee3175b20745 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword0e7254edf7bb0cf48d0fee3175b20745.url(options),
    method: 'get',
})

ResetPassword0e7254edf7bb0cf48d0fee3175b20745.definition = {
    methods: ["get","head"],
    url: '/nds/sheets/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/sheets/password-reset/reset'
*/
ResetPassword0e7254edf7bb0cf48d0fee3175b20745.url = (options?: RouteQueryOptions) => {
    return ResetPassword0e7254edf7bb0cf48d0fee3175b20745.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/sheets/password-reset/reset'
*/
ResetPassword0e7254edf7bb0cf48d0fee3175b20745.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword0e7254edf7bb0cf48d0fee3175b20745.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/sheets/password-reset/reset'
*/
ResetPassword0e7254edf7bb0cf48d0fee3175b20745.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword0e7254edf7bb0cf48d0fee3175b20745.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/sheets/password-reset/reset'
*/
const ResetPassword0e7254edf7bb0cf48d0fee3175b20745Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword0e7254edf7bb0cf48d0fee3175b20745.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/sheets/password-reset/reset'
*/
ResetPassword0e7254edf7bb0cf48d0fee3175b20745Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword0e7254edf7bb0cf48d0fee3175b20745.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/sheets/password-reset/reset'
*/
ResetPassword0e7254edf7bb0cf48d0fee3175b20745Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword0e7254edf7bb0cf48d0fee3175b20745.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword0e7254edf7bb0cf48d0fee3175b20745.form = ResetPassword0e7254edf7bb0cf48d0fee3175b20745Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/stats/password-reset/reset'
*/
const ResetPassword41c80ffe045bd4840cd25c9bea427ed3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword41c80ffe045bd4840cd25c9bea427ed3.url(options),
    method: 'get',
})

ResetPassword41c80ffe045bd4840cd25c9bea427ed3.definition = {
    methods: ["get","head"],
    url: '/nds/stats/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/stats/password-reset/reset'
*/
ResetPassword41c80ffe045bd4840cd25c9bea427ed3.url = (options?: RouteQueryOptions) => {
    return ResetPassword41c80ffe045bd4840cd25c9bea427ed3.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/stats/password-reset/reset'
*/
ResetPassword41c80ffe045bd4840cd25c9bea427ed3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword41c80ffe045bd4840cd25c9bea427ed3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/stats/password-reset/reset'
*/
ResetPassword41c80ffe045bd4840cd25c9bea427ed3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword41c80ffe045bd4840cd25c9bea427ed3.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/stats/password-reset/reset'
*/
const ResetPassword41c80ffe045bd4840cd25c9bea427ed3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword41c80ffe045bd4840cd25c9bea427ed3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/stats/password-reset/reset'
*/
ResetPassword41c80ffe045bd4840cd25c9bea427ed3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword41c80ffe045bd4840cd25c9bea427ed3.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/stats/password-reset/reset'
*/
ResetPassword41c80ffe045bd4840cd25c9bea427ed3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword41c80ffe045bd4840cd25c9bea427ed3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword41c80ffe045bd4840cd25c9bea427ed3.form = ResetPassword41c80ffe045bd4840cd25c9bea427ed3Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/storage/password-reset/reset'
*/
const ResetPassword334c6c9fdf9f57b84655414a3d7f9454 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword334c6c9fdf9f57b84655414a3d7f9454.url(options),
    method: 'get',
})

ResetPassword334c6c9fdf9f57b84655414a3d7f9454.definition = {
    methods: ["get","head"],
    url: '/nds/storage/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/storage/password-reset/reset'
*/
ResetPassword334c6c9fdf9f57b84655414a3d7f9454.url = (options?: RouteQueryOptions) => {
    return ResetPassword334c6c9fdf9f57b84655414a3d7f9454.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/storage/password-reset/reset'
*/
ResetPassword334c6c9fdf9f57b84655414a3d7f9454.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword334c6c9fdf9f57b84655414a3d7f9454.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/storage/password-reset/reset'
*/
ResetPassword334c6c9fdf9f57b84655414a3d7f9454.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword334c6c9fdf9f57b84655414a3d7f9454.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/storage/password-reset/reset'
*/
const ResetPassword334c6c9fdf9f57b84655414a3d7f9454Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword334c6c9fdf9f57b84655414a3d7f9454.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/storage/password-reset/reset'
*/
ResetPassword334c6c9fdf9f57b84655414a3d7f9454Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword334c6c9fdf9f57b84655414a3d7f9454.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/storage/password-reset/reset'
*/
ResetPassword334c6c9fdf9f57b84655414a3d7f9454Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword334c6c9fdf9f57b84655414a3d7f9454.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword334c6c9fdf9f57b84655414a3d7f9454.form = ResetPassword334c6c9fdf9f57b84655414a3d7f9454Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
const ResetPassword01e2dc01003e5970db905fba3bcb4643 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

ResetPassword01e2dc01003e5970db905fba3bcb4643.definition = {
    methods: ["get","head"],
    url: '/nds/super/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.url = (options?: RouteQueryOptions) => {
    return ResetPassword01e2dc01003e5970db905fba3bcb4643.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
const ResetPassword01e2dc01003e5970db905fba3bcb4643Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword01e2dc01003e5970db905fba3bcb4643.form = ResetPassword01e2dc01003e5970db905fba3bcb4643Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/system/password-reset/reset'
*/
const ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.url(options),
    method: 'get',
})

ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.definition = {
    methods: ["get","head"],
    url: '/nds/system/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/system/password-reset/reset'
*/
ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.url = (options?: RouteQueryOptions) => {
    return ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/system/password-reset/reset'
*/
ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/system/password-reset/reset'
*/
ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/system/password-reset/reset'
*/
const ResetPassword3c65bcd78d6ded452b75e73c7d1fcdecForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/system/password-reset/reset'
*/
ResetPassword3c65bcd78d6ded452b75e73c7d1fcdecForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/system/password-reset/reset'
*/
ResetPassword3c65bcd78d6ded452b75e73c7d1fcdecForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec.form = ResetPassword3c65bcd78d6ded452b75e73c7d1fcdecForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
const ResetPassword323b58fa16900ccee73e10f6caf172a1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

ResetPassword323b58fa16900ccee73e10f6caf172a1.definition = {
    methods: ["get","head"],
    url: '/nds/tools/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.url = (options?: RouteQueryOptions) => {
    return ResetPassword323b58fa16900ccee73e10f6caf172a1.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
const ResetPassword323b58fa16900ccee73e10f6caf172a1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword323b58fa16900ccee73e10f6caf172a1.form = ResetPassword323b58fa16900ccee73e10f6caf172a1Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/user/password-reset/reset'
*/
const ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.url(options),
    method: 'get',
})

ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.definition = {
    methods: ["get","head"],
    url: '/nds/user/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/user/password-reset/reset'
*/
ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.url = (options?: RouteQueryOptions) => {
    return ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/user/password-reset/reset'
*/
ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/user/password-reset/reset'
*/
ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/user/password-reset/reset'
*/
const ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/user/password-reset/reset'
*/
ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/user/password-reset/reset'
*/
ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252.form = ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252Form

const ResetPassword = {
    '/nds/admin/password-reset/reset': ResetPasswordb2da300647e6611f1437d70402620a59,
    '/nds/app/password-reset/reset': ResetPassworde958504616843ced0a5bec0ef9eee292,
    '/nds/calendar/password-reset/reset': ResetPassword4f89c44c35a7c227994d42b0f3b12f3c,
    '/nds/chat/password-reset/reset': ResetPassword570063cd6633a1432398e8411983d0ed,
    '/nds/clients/password-reset/reset': ResetPasswordff8799d13e4eb815601fc006a73d8cd6,
    '/nds/content/password-reset/reset': ResetPasswordd6bb3f8c0674d57b3669e59df9463511,
    '/nds/dev/password-reset/reset': ResetPasswordf19594ec2410f93dd79b5c8ca9330d53,
    '/nds/dialer/password-reset/reset': ResetPassword274b6e9d9c4893b54da840034b41a817,
    '/nds/email/password-reset/reset': ResetPassword6124c04be7fd20421395a9b0dab3d314,
    '/nds/files/password-reset/reset': ResetPasswordffad7df53d54e0786e5600f20deebbcb,
    '/nds/finance/password-reset/reset': ResetPasswordead096dafb71df6731c5463af733aad1,
    '/nds/locale/password-reset/reset': ResetPasswordddcdeb782d1038fca4880531f000cdd9,
    '/nds/manager/password-reset/reset': ResetPassword19ac0c70ac1ea57f1de4040bae9ae75f,
    '/nds/notify/password-reset/reset': ResetPassword6a9da8deec0604263ef565cbc5eb49cd,
    '/nds/oauth/password-reset/reset': ResetPassword6d2cf8fbba6cd494e781784f261b718b,
    '/nds/partner/password-reset/reset': ResetPassword41e4de70d56e9f75eddf1001bb79953e,
    '/nds/plugins/password-reset/reset': ResetPasswordec450f49f89953a94b16f3ba0ac24d14,
    '/nds/private/password-reset/reset': ResetPassword1391970fbcfd41c7177d9a0883a40e0b,
    '/nds/product/password-reset/reset': ResetPasswordedd129cce67fd89ec54b3028a20103da,
    '/nds/queue/password-reset/reset': ResetPasswordcf521fc621685c836f501a4befdd5e86,
    '/nds/script/password-reset/reset': ResetPassword2d2fdb20b1a61d3b6447efe2997d774f,
    '/nds/server/password-reset/reset': ResetPassword16a7bda364935b972ee611b270694efa,
    '/nds/service/password-reset/reset': ResetPassword23347f22437356a6a26b363fa00f63d6,
    '/nds/sheets/password-reset/reset': ResetPassword0e7254edf7bb0cf48d0fee3175b20745,
    '/nds/stats/password-reset/reset': ResetPassword41c80ffe045bd4840cd25c9bea427ed3,
    '/nds/storage/password-reset/reset': ResetPassword334c6c9fdf9f57b84655414a3d7f9454,
    '/nds/super/password-reset/reset': ResetPassword01e2dc01003e5970db905fba3bcb4643,
    '/nds/system/password-reset/reset': ResetPassword3c65bcd78d6ded452b75e73c7d1fcdec,
    '/nds/tools/password-reset/reset': ResetPassword323b58fa16900ccee73e10f6caf172a1,
    '/nds/user/password-reset/reset': ResetPassword93f2b3dfd7696ff6ba2469f5b0d57252,
}

export default ResetPassword