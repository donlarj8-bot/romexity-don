import { type SchemaTypeDefinition } from 'sanity'
import store from './store'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [store],
}
