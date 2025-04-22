import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Hjemmeside_UIN25ak3_benjamav',

  projectId: '9jdqd2bw',
  dataset: 'sanityprofilkort',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
