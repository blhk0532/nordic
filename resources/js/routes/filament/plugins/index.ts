import auth from './auth'
import pages from './pages'

const plugins = {
    auth: Object.assign(auth, auth),
    pages: Object.assign(pages, pages),
}

export default plugins