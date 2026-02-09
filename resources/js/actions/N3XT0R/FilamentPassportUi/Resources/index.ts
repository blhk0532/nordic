import ClientResource from './ClientResource'
import TokenResource from './TokenResource'
import PassportScopeResourceResource from './PassportScopeResourceResource'
import PassportScopeActionResource from './PassportScopeActionResource'

const Resources = {
    ClientResource: Object.assign(ClientResource, ClientResource),
    TokenResource: Object.assign(TokenResource, TokenResource),
    PassportScopeResourceResource: Object.assign(PassportScopeResourceResource, PassportScopeResourceResource),
    PassportScopeActionResource: Object.assign(PassportScopeActionResource, PassportScopeActionResource),
}

export default Resources