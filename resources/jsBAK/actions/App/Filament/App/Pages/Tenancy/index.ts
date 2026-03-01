import RegisterTeam from './RegisterTeam'
import EditTeamProfile from './EditTeamProfile'

const Tenancy = {
    RegisterTeam: Object.assign(RegisterTeam, RegisterTeam),
    EditTeamProfile: Object.assign(EditTeamProfile, EditTeamProfile),
}

export default Tenancy