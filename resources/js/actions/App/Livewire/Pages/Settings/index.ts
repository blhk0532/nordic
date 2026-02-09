import Profile from './Profile'
import Password from './Password'
import Appearance from './Appearance'
import TwoFactor from './TwoFactor'

const Settings = {
    Profile: Object.assign(Profile, Profile),
    Password: Object.assign(Password, Password),
    Appearance: Object.assign(Appearance, Appearance),
    TwoFactor: Object.assign(TwoFactor, TwoFactor),
}

export default Settings