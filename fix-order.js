const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skNwTPiNVIJUQ6X8N24YfKI5LM8Gpf6Iywx9Wy27sCdna8lQB4NS55KwYgOBhaimUeazxmONbgJezF7TZzuB8U83e9a81wln5D6CXMuueACgXwGqXsT7f6a06f2YyyKmrfh83Y1sANnYIPFq0U8RxNG1RIeVI7t1OWGigzUbWNUXUnXy5HFK' // <--- PUT YOUR TOKEN BACK IN HERE
});

async function runReset() {
  console.log('Fetching ONLY published shops (ignoring drafts)...');
  
  // This is the magic filter: !(_id in path("drafts.**"))
  const query = `*[_type == "store" && !(_id in path("drafts.**"))]`;
  const shops = await client.fetch(query);

  console.log(`Found ${shops.length} published shops. Re-stamping 1 to ${shops.length}...`);

  const transaction = client.transaction();

  shops.forEach((shop, index) => {
    const orderNum = index + 1;
    transaction.patch(shop._id, {
      set: { orderNumber: orderNum }
    });
    console.log(`[${orderNum}] Resetting: ${shop.name}`);
  });

  await transaction.commit();
  console.log('✅ SUCCESS! Candy should now be #236.');
}

runReset().catch(console.error);