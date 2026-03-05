import TaskBoard from './TaskBoard'
import FlowForge from './FlowForge'
import Dashboard from './Dashboard'

const Pages = {
    TaskBoard: Object.assign(TaskBoard, TaskBoard),
    FlowForge: Object.assign(FlowForge, FlowForge),
    Dashboard: Object.assign(Dashboard, Dashboard),
}

export default Pages