import jobBatches from './job-batches'
import jobs from './jobs'
import postNums from './post-nums'
import privateData from './private-data'
import ratsitAdresser from './ratsit-adresser'
import ratsitData from './ratsit-data'
import databaser from './databaser'
import ratsitKommuner from './ratsit-kommuner'
import ratsitPostorter from './ratsit-postorter'
import terminalLogs from './terminal-logs'
import searches from './searches'
import failedJobs from './failed-jobs'

const resources = {
    jobBatches: Object.assign(jobBatches, jobBatches),
    jobs: Object.assign(jobs, jobs),
    postNums: Object.assign(postNums, postNums),
    privateData: Object.assign(privateData, privateData),
    ratsitAdresser: Object.assign(ratsitAdresser, ratsitAdresser),
    ratsitData: Object.assign(ratsitData, ratsitData),
    databaser: Object.assign(databaser, databaser),
    ratsitKommuner: Object.assign(ratsitKommuner, ratsitKommuner),
    ratsitPostorter: Object.assign(ratsitPostorter, ratsitPostorter),
    terminalLogs: Object.assign(terminalLogs, terminalLogs),
    searches: Object.assign(searches, searches),
    failedJobs: Object.assign(failedJobs, failedJobs),
}

export default resources