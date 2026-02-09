import FileManager from './FileManager'
import FileSystem from './FileSystem'
import SchemaExample from './SchemaExample'

const Pages = {
    FileManager: Object.assign(FileManager, FileManager),
    FileSystem: Object.assign(FileSystem, FileSystem),
    SchemaExample: Object.assign(SchemaExample, SchemaExample),
}

export default Pages