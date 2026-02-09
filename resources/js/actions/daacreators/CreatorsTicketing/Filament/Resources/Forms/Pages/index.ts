import ListForms from './ListForms'
import CreateForm from './CreateForm'
import EditForm from './EditForm'

const Pages = {
    ListForms: Object.assign(ListForms, ListForms),
    CreateForm: Object.assign(CreateForm, CreateForm),
    EditForm: Object.assign(EditForm, EditForm),
}

export default Pages