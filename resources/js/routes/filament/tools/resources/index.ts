import searches from './searches'
import failedJobs from './failed-jobs'
import exceptions from './exceptions'
import commandRunner from './command-runner'
import bulkActions from './bulk-actions'

const resources = {
    searches: Object.assign(searches, searches),
    failedJobs: Object.assign(failedJobs, failedJobs),
    exceptions: Object.assign(exceptions, exceptions),
    commandRunner: Object.assign(commandRunner, commandRunner),
    bulkActions: Object.assign(bulkActions, bulkActions),
}

export default resources