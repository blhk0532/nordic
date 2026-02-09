import ListIncomes from './ListIncomes'
import CreateIncome from './CreateIncome'
import ViewIncome from './ViewIncome'
import EditIncome from './EditIncome'
import IncomePayments from './IncomePayments'

const Pages = {
    ListIncomes: Object.assign(ListIncomes, ListIncomes),
    CreateIncome: Object.assign(CreateIncome, CreateIncome),
    ViewIncome: Object.assign(ViewIncome, ViewIncome),
    EditIncome: Object.assign(EditIncome, EditIncome),
    IncomePayments: Object.assign(IncomePayments, IncomePayments),
}

export default Pages