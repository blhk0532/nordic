import FinanceDashboard from './FinanceDashboard'
import PaymentSchedule from './PaymentSchedule'
import Profile from './Profile'
import Reports from './Reports'

const Pages = {
    FinanceDashboard: Object.assign(FinanceDashboard, FinanceDashboard),
    PaymentSchedule: Object.assign(PaymentSchedule, PaymentSchedule),
    Profile: Object.assign(Profile, Profile),
    Reports: Object.assign(Reports, Reports),
}

export default Pages