import { Syne } from 'next/font/google';
import { client } from '@/sanity/lib/client'; 
import HomeClient from '@/components/HomeClient';

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['800'], 
});

export default async function Page() {
  // We fetch the data HERE on the server
  // Added orderNumber and sorted by it (asc = ascending, 1 to 236)
  const query = `*[_type == "store"] | order(orderNumber asc) {
    _id,
    name,
    orderNumber,
    description,
    "img": mainImage.asset->url,
    tags,
    phone,
    price,
    googleMapsUrl
  }`;
  
  const shops = await client.fetch(query, {}, { next: { revalidate: 60 } });

  return (
    <HomeClient 
      initialShops={shops} 
      syneClass={syne.className} 
    />
  );
}