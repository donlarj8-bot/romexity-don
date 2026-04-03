'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// REMOVED: The import for the orderable plugin that was causing the error
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'

// KEEP THIS: This is your custom "Swap Brain" logic
import { SwapOrderAction } from './sanity/actions/swapOrderAction'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    // FIXED: Simplified the structure tool to remove the missing plugin
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
  
  // This replaces the regular "Publish" button with our new "Publish & Swap" button
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