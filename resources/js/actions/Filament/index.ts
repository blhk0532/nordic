import Actions from './Actions'
import Auth from './Auth'
import Http from './Http'

const Filament = {
    Actions: Object.assign(Actions, Actions),
    Auth: Object.assign(Auth, Auth),
    Http: Object.assign(Http, Http),
}

export default Filament