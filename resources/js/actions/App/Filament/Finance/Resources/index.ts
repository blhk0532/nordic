import Categories from './Categories'
import Clients from './Clients'
import Discounts from './Discounts'
import Incomes from './Incomes'
import Outcomes from './Outcomes'
import Payments from './Payments'
import Subcategories from './Subcategories'
import Users from './Users'

const Resources = {
    Categories: Object.assign(Categories, Categories),
    Clients: Object.assign(Clients, Clients),
    Discounts: Object.assign(Discounts, Discounts),
    Incomes: Object.assign(Incomes, Incomes),
    Outcomes: Object.assign(Outcomes, Outcomes),
    Payments: Object.assign(Payments, Payments),
    Subcategories: Object.assign(Subcategories, Subcategories),
    Users: Object.assign(Users, Users),
}

export default Resources