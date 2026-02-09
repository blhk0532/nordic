import exports from './exports'
import imports from './imports'
import admin from './admin'
import adm from './adm'
import app from './app'
import chat from './chat'
import data from './data'
import notify from './notify'
import tools from './tools'
import superMethod from './super'

const filament = {
    exports: Object.assign(exports, exports),
    imports: Object.assign(imports, imports),
    admin: Object.assign(admin, admin),
    adm: Object.assign(adm, adm),
    app: Object.assign(app, app),
    chat: Object.assign(chat, chat),
    data: Object.assign(data, data),
    notify: Object.assign(notify, notify),
    tools: Object.assign(tools, tools),
    super: Object.assign(superMethod, superMethod),
}

export default filament