import admin from './admin'
import adm from './adm'

const lockscreen = {
    admin: Object.assign(admin, admin),
    adm: Object.assign(adm, adm),
}

export default lockscreen