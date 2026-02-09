import RedirectToTenantController from './RedirectToTenantController'
import RedirectToHomeController from './RedirectToHomeController'

const Controllers = {
    RedirectToTenantController: Object.assign(RedirectToTenantController, RedirectToTenantController),
    RedirectToHomeController: Object.assign(RedirectToHomeController, RedirectToHomeController),
}

export default Controllers