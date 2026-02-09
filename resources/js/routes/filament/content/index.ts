import auth from './auth'
import pages from './pages'

const content = {
    auth: Object.assign(auth, auth),
    pages: Object.assign(pages, pages),
}

export default content