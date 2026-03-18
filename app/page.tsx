import { Syne } from 'next/font/google';
import { client } from '@/sanity/lib/client'; 
import HomeClient from '@/components/HomeClient';

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['800'], 
});

export default async function Page() {
  // We fetch the data HERE on the server
  const query = `*[_type == "store"]{
    _id,
    name,
    description,
    "loc": location,
    "img": mainImage.asset->url,
    tags,
    phone,
    price,
    mapUrl
  }`;
  
  const shops = await client.fetch(query, {}, { next: { revalidate: 60 } });

  return (
    <HomeClient 
      initialShops={shops} 
      syneClass={syne.className} 
    />
  );
}