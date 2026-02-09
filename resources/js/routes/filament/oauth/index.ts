import auth from './auth'
import pages from './pages'

const oauth = {
    auth: Object.assign(auth, auth),
    pages: Object.assign(pages, pages),
}

export default oauth