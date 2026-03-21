import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'store',
  type: 'document',
  title: 'Stores',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Store Name' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ 
      name: 'location', 
      type: 'string', 
      title: 'Display Address', 
      description: 'The text shown on the card (e.g. AYYAPPA SOCIETY MAIN ROAD)' 
    }),
    defineField({ 
      name: 'googleMapsUrl', 
      type: 'url', 
      title: 'Google Maps Link',
      description: 'Search the shop on Google Maps and paste the URL here'
    }),
    defineField({ 
      name: 'mainImage', 
      type: 'image', 
      title: 'Store Photo', 
      options: { hotspot: true } 
    }),
    defineField({ name: 'tags', type: 'string', title: 'Search Tags' }),
  ],
})