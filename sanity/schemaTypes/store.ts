import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'store',
  type: 'document',
  title: 'Stores',
  // REMOVED: orderings: [orderRankOrdering]
  fields: [
    // REMOVED: orderRankField({ type: 'store' })
    
    defineField({ name: 'name', type: 'string', title: 'Store Name' }),
    
    defineField({ 
      name: 'orderNumber', 
      type: 'number', 
      title: 'Order Number',
      description: 'Type a number here and click "Publish & Swap" to change positions.',
      initialValue: async (items, { getClient }) => {
        const client = getClient({ apiVersion: '2024-01-01' });
        const query = `*[_type == "store" && !(_id in path("drafts.**"))] | order(orderNumber desc)[0].orderNumber`;
        const lastNumber = await client.fetch(query);
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