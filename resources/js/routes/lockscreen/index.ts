import admin from './admin'
import adm from './adm'
import superMethod from './super'

const lockscreen = {
    admin: Object.assign(admin, admin),
    adm: Object.assign(adm, adm),
    super: Object.assign(superMethod, superMethod),
}

export default lockscreen