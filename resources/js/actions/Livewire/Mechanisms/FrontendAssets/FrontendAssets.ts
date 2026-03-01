import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.min.js'
*/
const returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.url(options),
    method: 'get',
})

returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.definition = {
    methods: ["get","head"],
    url: '/livewire-86207cf2/livewire.min.js',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.min.js'
*/
returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.url = (options?: RouteQueryOptions) => {
    return returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.min.js'
*/
returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.min.js'
*/
returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.url(options),
    method: 'head',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.min.js'
*/
const returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.min.js'
*/
returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire-86207cf2/livewire.min.js'
*/
returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d.form = returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00dForm
/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire/livewire.min.js'
*/
const returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'get',
})

returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.definition = {
    methods: ["get","head"],
    url: '/livewire/livewire.min.js',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url = (options?: RouteQueryOptions) => {
    return returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'head',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire/livewire.min.js'
*/
const returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:81
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.form = returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5Form

export const returnJavaScriptAsFile = {
    '/livewire-86207cf2/livewire.min.js': returnJavaScriptAsFile0a585032f5cd55023624d1107e69c00d,
    '/livewire/livewire.min.js': returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5,
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:94
* @route '/livewire-86207cf2/livewire.min.js.map'
*/
export const maps = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: maps.url(options),
    method: 'get',
})

maps.definition = {
    methods: ["get","head"],
    url: '/livewire-86207cf2/livewire.min.js.map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:94
* @route '/livewire-86207cf2/livewire.min.js.map'
*/
maps.url = (options?: RouteQueryOptions) => {
    return maps.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:94
* @route '/livewire-86207cf2/livewire.min.js.map'
*/
maps.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: maps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:94
* @route '/livewire-86207cf2/livewire.min.js.map'
*/
maps.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: maps.url(options),
    method: 'head',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:94
* @route '/livewire-86207cf2/livewire.min.js.map'
*/
const mapsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: maps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:94
* @route '/livewire-86207cf2/livewire.min.js.map'
*/
mapsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: maps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:94
* @route '/livewire-86207cf2/livewire.min.js.map'
*/
mapsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: maps.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

maps.form = mapsForm

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::cspMaps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:103
* @route '/livewire-86207cf2/livewire.csp.min.js.map'
*/
export const cspMaps = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cspMaps.url(options),
    method: 'get',
})

cspMaps.definition = {
    methods: ["get","head"],
    url: '/livewire-86207cf2/livewire.csp.min.js.map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::cspMaps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:103
* @route '/livewire-86207cf2/livewire.csp.min.js.map'
*/
cspMaps.url = (options?: RouteQueryOptions) => {
    return cspMaps.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::cspMaps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:103
* @route '/livewire-86207cf2/livewire.csp.min.js.map'
*/
cspMaps.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cspMaps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::cspMaps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:103
* @route '/livewire-86207cf2/livewire.csp.min.js.map'
*/
cspMaps.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cspMaps.url(options),
    method: 'head',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::cspMaps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:103
* @route '/livewire-86207cf2/livewire.csp.min.js.map'
*/
const cspMapsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cspMaps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::cspMaps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:103
* @route '/livewire-86207cf2/livewire.csp.min.js.map'
*/
cspMapsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cspMaps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::cspMaps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:103
* @route '/livewire-86207cf2/livewire.csp.min.js.map'
*/
cspMapsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cspMaps.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cspMaps.form = cspMapsForm

const FrontendAssets = { returnJavaScriptAsFile, maps, cspMaps }

export default FrontendAssets