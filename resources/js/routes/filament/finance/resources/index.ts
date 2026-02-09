import categories from './categories'
import clients from './clients'
import discounts from './discounts'
import incomes from './incomes'
import outcomes from './outcomes'
import payments from './payments'
import subcategories from './subcategories'
import users from './users'
import searches from './searches'

const resources = {
    categories: Object.assign(categories, categories),
    clients: Object.assign(clients, clients),
    discounts: Object.assign(discounts, discounts),
    incomes: Object.assign(incomes, incomes),
    outcomes: Object.assign(outcomes, outcomes),
    payments: Object.assign(payments, payments),
    subcategories: Object.assign(subcategories, subcategories),
    users: Object.assign(users, users),
    searches: Object.assign(searches, searches),
}

export default resources