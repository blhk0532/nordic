import ListResources from './ListResources'
import CreateResource from './CreateResource'
import EditResource from './EditResource'

const Pages = {
    ListResources: Object.assign(ListResources, ListResources),
    CreateResource: Object.assign(CreateResource, CreateResource),
    EditResource: Object.assign(EditResource, EditResource),
}

export default Pages