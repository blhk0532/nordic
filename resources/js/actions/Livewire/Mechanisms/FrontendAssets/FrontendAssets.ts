import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.js'
*/
const returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.url(options),
    method: 'get',
})

returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.definition = {
    methods: ["get","head"],
    url: '/livewire/livewire.js',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.js'
*/
returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.url = (options?: RouteQueryOptions) => {
    return returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.js'
*/
returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.js'
*/
returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.url(options),
    method: 'head',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.js'
*/
const returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.js'
*/
returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.js'
*/
returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0.form = returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0Form
/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
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
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url = (options?: RouteQueryOptions) => {
    return returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'head',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.min.js'
*/
const returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
* @route '/livewire/livewire.min.js'
*/
returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::returnJavaScriptAsFile
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:79
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
    '/livewire/livewire.js': returnJavaScriptAsFilea71d666b14368e66fefdc9c70cb5e5b0,
    '/livewire/livewire.min.js': returnJavaScriptAsFileb6b9fa30505bfec6f7e9137a73e290b5,
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:88
* @route '/livewire/livewire.min.js.map'
*/
export const maps = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: maps.url(options),
    method: 'get',
})

maps.definition = {
    methods: ["get","head"],
    url: '/livewire/livewire.min.js.map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:88
* @route '/livewire/livewire.min.js.map'
*/
maps.url = (options?: RouteQueryOptions) => {
    return maps.definition.url + queryParams(options)
}

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:88
* @route '/livewire/livewire.min.js.map'
*/
maps.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: maps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:88
* @route '/livewire/livewire.min.js.map'
*/
maps.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: maps.url(options),
    method: 'head',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:88
* @route '/livewire/livewire.min.js.map'
*/
const mapsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: maps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:88
* @route '/livewire/livewire.min.js.map'
*/
mapsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: maps.url(options),
    method: 'get',
})

/**
* @see \Livewire\Mechanisms\FrontendAssets\FrontendAssets::maps
* @see vendor/livewire/livewire/src/Mechanisms/FrontendAssets/FrontendAssets.php:88
* @route '/livewire/livewire.min.js.map'
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

const FrontendAssets = { returnJavaScriptAsFile, maps }

export default FrontendAssets