import { Syne } from 'next/font/google';
import { client } from '@/sanity/lib/client'; 
import HomeClient from '@/components/HomeClient';

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['800'], 
});

export default async function Page() {
  // UPDATED: Now sorting by orderRank (the "Easy Sort" value) instead of orderNumber
  const query = `*[_type == "store"] | order(orderRank asc) {
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
  
  // revalidate: 60 means it checks for changes every 60 seconds
  const shops = await client.fetch(query, {}, { next: { revalidate: 60 } });

  return (
    <HomeClient 
      initialShops={shops} 
      syneClass={syne.className} 
    />
  );
}