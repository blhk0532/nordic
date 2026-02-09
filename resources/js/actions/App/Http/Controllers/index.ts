import Api from './Api'
import SessionController from './SessionController'
import UserEmailResetNotification from './UserEmailResetNotification'
import UserPasswordController from './UserPasswordController'
import UserController from './UserController'
import UserEmailVerificationNotificationController from './UserEmailVerificationNotificationController'
import RingaDataOutcomeController from './RingaDataOutcomeController'
import QueueController from './QueueController'
import CalendarEventController from './CalendarEventController'
import CalendarResourceController from './CalendarResourceController'
import UserProfileController from './UserProfileController'

const Controllers = {
    Api: Object.assign(Api, Api),
    SessionController: Object.assign(SessionController, SessionController),
    UserEmailResetNotification: Object.assign(UserEmailResetNotification, UserEmailResetNotification),
    UserPasswordController: Object.assign(UserPasswordController, UserPasswordController),
    UserController: Object.assign(UserController, UserController),
    UserEmailVerificationNotificationController: Object.assign(UserEmailVerificationNotificationController, UserEmailVerificationNotificationController),
    RingaDataOutcomeController: Object.assign(RingaDataOutcomeController, RingaDataOutcomeController),
    QueueController: Object.assign(QueueController, QueueController),
    CalendarEventController: Object.assign(CalendarEventController, CalendarEventController),
    CalendarResourceController: Object.assign(CalendarResourceController, CalendarResourceController),
    UserProfileController: Object.assign(UserProfileController, UserProfileController),
}

export default Controllers