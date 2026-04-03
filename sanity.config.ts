'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'

// 1. ADDED: Import the "Swap Brain" you just created
import { SwapOrderAction } from './sanity/actions/swapOrderAction'

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
            orderableDocumentListDeskItem({
              type: 'store',
              title: 'Rank Shops (Easy Sort)',
              S,
              context
            }),
            
            S.divider(),

            ...S.documentTypeListItems(),
          ]),
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
  
  // 2. ADDED: This tells Sanity to replace the regular "Publish" button 
  // with our new "Publish & Swap" button for Stores.
  document: {
    actions: (prev, context) => {
      return context.schemaType === 'store'
        ? prev.map((originalAction) =>
            originalAction.action === 'publish' ? SwapOrderAction : originalAction
          )
        : prev
    },
  },
})