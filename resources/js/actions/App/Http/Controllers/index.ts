import SessionController from './SessionController'
import RingaDataOutcomeController from './RingaDataOutcomeController'
import Api from './Api'
import QueueController from './QueueController'
import CalendarEventController from './CalendarEventController'
import CalendarResourceController from './CalendarResourceController'
import UserController from './UserController'
import UserProfileController from './UserProfileController'
import UserPasswordController from './UserPasswordController'
import UserTwoFactorAuthenticationController from './UserTwoFactorAuthenticationController'
import UserEmailResetNotification from './UserEmailResetNotification'
import UserEmailVerificationNotificationController from './UserEmailVerificationNotificationController'

const Controllers = {
    SessionController: Object.assign(SessionController, SessionController),
    RingaDataOutcomeController: Object.assign(RingaDataOutcomeController, RingaDataOutcomeController),
    Api: Object.assign(Api, Api),
    QueueController: Object.assign(QueueController, QueueController),
    CalendarEventController: Object.assign(CalendarEventController, CalendarEventController),
    CalendarResourceController: Object.assign(CalendarResourceController, CalendarResourceController),
    UserController: Object.assign(UserController, UserController),
    UserProfileController: Object.assign(UserProfileController, UserProfileController),
    UserPasswordController: Object.assign(UserPasswordController, UserPasswordController),
    UserTwoFactorAuthenticationController: Object.assign(UserTwoFactorAuthenticationController, UserTwoFactorAuthenticationController),
    UserEmailResetNotification: Object.assign(UserEmailResetNotification, UserEmailResetNotification),
    UserEmailVerificationNotificationController: Object.assign(UserEmailVerificationNotificationController, UserEmailVerificationNotificationController),
}

export default Controllers