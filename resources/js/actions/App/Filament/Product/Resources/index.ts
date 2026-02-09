import Customers from './Customers'
import Orders from './Orders'

const Resources = {
    Customers: Object.assign(Customers, Customers),
    Orders: Object.assign(Orders, Orders),
}

export default Resources