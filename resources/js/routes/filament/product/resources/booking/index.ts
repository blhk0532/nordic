import customers from './customers'
import orders from './orders'

const booking = {
    customers: Object.assign(customers, customers),
    orders: Object.assign(orders, orders),
}

export default booking