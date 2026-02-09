import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/adm',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\Dashboard::__invoke
* @see app/Filament/Admin/Pages/Dashboard.php:7
* @route '/nds/adm'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
export const sendWhatsapp = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendWhatsapp.url(options),
    method: 'get',
})

sendWhatsapp.definition = {
    methods: ["get","head"],
    url: '/nds/adm/send-whatsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
sendWhatsapp.url = (options?: RouteQueryOptions) => {
    return sendWhatsapp.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
sendWhatsapp.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
sendWhatsapp.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sendWhatsapp.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
const sendWhatsappForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
sendWhatsappForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Pages\SendWhatsapp::__invoke
* @see app/Filament/Admin/Pages/SendWhatsapp.php:7
* @route '/nds/adm/send-whatsapp'
*/
sendWhatsappForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sendWhatsapp.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sendWhatsapp.form = sendWhatsappForm

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
export const sanctum = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sanctum.url(options),
    method: 'get',
})

sanctum.definition = {
    methods: ["get","head"],
    url: '/nds/adm/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
sanctum.url = (options?: RouteQueryOptions) => {
    return sanctum.definition.url + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
sanctum.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
sanctum.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sanctum.url(options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
const sanctumForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
sanctumForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see vendor/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/adm/sanctum'
*/
sanctumForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sanctum.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sanctum.form = sanctumForm

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
export const generalSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettingsPage.url(options),
    method: 'get',
})

generalSettingsPage.definition = {
    methods: ["get","head"],
    url: '/nds/adm/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
generalSettingsPage.url = (options?: RouteQueryOptions) => {
    return generalSettingsPage.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
generalSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
generalSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generalSettingsPage.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
const generalSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
generalSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see vendor/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/adm/general-settings-page'
*/
generalSettingsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

generalSettingsPage.form = generalSettingsPageForm

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
export const myProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(options),
    method: 'get',
})

myProfile.definition = {
    methods: ["get","head"],
    url: '/nds/adm/my-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
myProfile.url = (options?: RouteQueryOptions) => {
    return myProfile.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
myProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
myProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myProfile.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
const myProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
myProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/adm/my-profile'
*/
myProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

myProfile.form = myProfileForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    sendWhatsapp: Object.assign(sendWhatsapp, sendWhatsapp),
    sanctum: Object.assign(sanctum, sanctum),
    generalSettingsPage: Object.assign(generalSettingsPage, generalSettingsPage),
    myProfile: Object.assign(myProfile, myProfile),
}

export default pages