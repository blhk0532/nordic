import exports from './exports'
import imports from './imports'
import admin from './admin'
import adm from './adm'
import app from './app'

const filament = {
    exports: Object.assign(exports, exports),
    imports: Object.assign(imports, imports),
    admin: Object.assign(admin, admin),
    adm: Object.assign(adm, adm),
    app: Object.assign(app, app),
}

export default filament