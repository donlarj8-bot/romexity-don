'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // 1. The "Easy Sort" tool for moving things
            orderableDocumentListDeskItem({
              type: 'store',
              title: 'Rank Shops (Easy Sort)',
              S,
              context
            }),
            
            S.divider(),

            // 2. THIS IS NOW BACK: Your original "Stores" folder
            // It will now show every document type, including Stores
            ...S.documentTypeListItems(),
          ]),
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})