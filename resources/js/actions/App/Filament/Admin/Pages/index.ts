import ControlPanel from './ControlPanel'
import Dashboard from './Dashboard'
import SendWhatsapp from './SendWhatsapp'
import TaskBoard from './TaskBoard'

const Pages = {
    ControlPanel: Object.assign(ControlPanel, ControlPanel),
    Dashboard: Object.assign(Dashboard, Dashboard),
    SendWhatsapp: Object.assign(SendWhatsapp, SendWhatsapp),
    TaskBoard: Object.assign(TaskBoard, TaskBoard),
}

export default Pages