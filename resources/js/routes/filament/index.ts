import exports from './exports'
import imports from './imports'
import company from './company'
import admin from './admin'
import app from './app'
import booking from './booking'
import calendar from './calendar'
import chat from './chat'
import data from './data'
import email from './email'
import files from './files'
import notify from './notify'
import queue from './queue'
import superMethod from './super'
import tools from './tools'

const filament = {
    exports: Object.assign(exports, exports),
    imports: Object.assign(imports, imports),
    company: Object.assign(company, company),
    admin: Object.assign(admin, admin),
    app: Object.assign(app, app),
    booking: Object.assign(booking, booking),
    calendar: Object.assign(calendar, calendar),
    chat: Object.assign(chat, chat),
    data: Object.assign(data, data),
    email: Object.assign(email, email),
    files: Object.assign(files, files),
    notify: Object.assign(notify, notify),
    queue: Object.assign(queue, queue),
    super: Object.assign(superMethod, superMethod),
    tools: Object.assign(tools, tools),
}

export default filament