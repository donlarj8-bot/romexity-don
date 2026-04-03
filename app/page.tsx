// app/page.tsx

import { Syne } from 'next/font/google';
import { client } from '@/sanity/lib/client'; 
import HomeClient from '@/components/HomeClient';

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['800'], 
});

export default async function Page() {
  // 1. FIXED: Sorting by orderNumber (asc = 1, 2, 3...)
  // 2. ADDED: _updatedAt to help debug if data is fresh
  const query = `*[_type == "store"] | order(orderNumber asc) {
    _id,
    name,
    orderNumber,
    description,
    "img": mainImage.asset->url,
    tags,
    phone,
    price,
    googleMapsUrl,
    _updatedAt
  }`;
  
  // 3. NOTE: The 'revalidate: 0' forces Next.js to get fresh data every time 
  // you refresh the page. Change this back to 60 once you are done testing.
  const shops = await client.fetch(query, {}, { next: { revalidate: 0 } });

  return (
    <HomeClient 
      initialShops={shops} 
      syneClass={syne.className} 
    />
  );
}