import Dashboard from './Dashboard'
import SendWhatsapp from './SendWhatsapp'

const Pages = {
    Dashboard: Object.assign(Dashboard, Dashboard),
    SendWhatsapp: Object.assign(SendWhatsapp, SendWhatsapp),
}

export default Pages