import ListOutcomes from './ListOutcomes'
import CreateOutcomes from './CreateOutcomes'
import EditOutcomes from './EditOutcomes'

const Pages = {
    ListOutcomes: Object.assign(ListOutcomes, ListOutcomes),
    CreateOutcomes: Object.assign(CreateOutcomes, CreateOutcomes),
    EditOutcomes: Object.assign(EditOutcomes, EditOutcomes),
}

export default Pages