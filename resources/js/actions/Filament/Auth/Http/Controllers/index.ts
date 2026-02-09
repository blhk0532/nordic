import LogoutController from './LogoutController'
import EmailChangeVerificationController from './EmailChangeVerificationController'
import BlockEmailChangeVerificationController from './BlockEmailChangeVerificationController'

const Controllers = {
    LogoutController: Object.assign(LogoutController, LogoutController),
    EmailChangeVerificationController: Object.assign(EmailChangeVerificationController, EmailChangeVerificationController),
    BlockEmailChangeVerificationController: Object.assign(BlockEmailChangeVerificationController, BlockEmailChangeVerificationController),
}

export default Controllers