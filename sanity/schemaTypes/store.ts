import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'store',
  type: 'document',
  title: 'Stores',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Store Name' }),
    
    // Auto-Logic: Strictly ignores drafts to find the true next number
    defineField({ 
      name: 'orderNumber', 
      type: 'number', 
      title: 'Order Number',
      description: 'Automatically calculates the next position (e.g., 237).',
      initialValue: async (items, { getClient }) => {
        // Use a stable API version
        const client = getClient({ apiVersion: '2024-01-01' });
        
        // This query ignores drafts and ONLY looks at published documents
        const query = `*[_type == "store" && !(_id in path("drafts.**"))] | order(orderNumber desc)[0].orderNumber`;
        
        const lastNumber = await client.fetch(query);
        
        // If it finds a published number, add 1. Otherwise, start at 1.
        return (lastNumber || 0) + 1;
      },
    }),

    defineField({ name: 'description', type: 'text', title: 'Description' }),
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