import whatsappInstances from './whatsapp-instances'
import activityLogs from './activity-logs'
import shield from './shield'

const resources = {
    whatsappInstances: Object.assign(whatsappInstances, whatsappInstances),
    activityLogs: Object.assign(activityLogs, activityLogs),
    shield: Object.assign(shield, shield),
}

export default resources