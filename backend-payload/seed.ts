import payload from 'payload';


payload.init({
  secret: process.env.PAYLOAD_SECRET,
  : POSTGRESQL_URL, // PostgreSQL URL goes here
  local: true,
});

const seed = async () => {
  try {
    // FETCH DATA FROM EXTERNAL API OR LOCAL SOURCE
    const docs = await fetch('https://my-api.com').then(res => res.json());

    // SEEDING THE PAYLOAD COLLECTION
    const promises = docs.map(async (doc) => {
      await payload.create({
        collection: 'yourCollectionName', // Specify your collection
        data: doc,
      });
    });

    // WAIT FOR ALL DOCUMENTS TO BE ADDED
    await Promise.all(promises);

    console.log('Seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seed();
