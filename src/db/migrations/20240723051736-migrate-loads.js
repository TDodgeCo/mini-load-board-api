module.exports = {
  async up(db, client) {
    // Drop the `loads` collection if it exists
    await db.collection('loads').drop().catch(err => console.log('Collection does not exist, skipping drop'));

    // Recreate the `loads` collection with the updated schema
    await db.createCollection('loads');
    
    // Optionally, you can add indexes or initial data here
    await db.collection('loads').insertMany([
      {
        status: true,
        title: 'Sample Load 1',
        description: 'Description for Sample Load 1',
        weight: 1000,
        origin: 'Origin 1',
        destination: 'Destination 1',
        priority: 'normal'
      },
      {
        status: true,
        title: 'Sample Load 2',
        description: 'Description for Sample Load 2',
        weight: 2000,
        origin: 'Origin 2',
        destination: 'Destination 2',
        priority: 'normal'
      }
    ]);
  },
  async down(db, client) {
    // Drop the `loads` collection
    await db.collection('loads').drop().catch(err => console.log('Collection does not exist, skipping drop'));
  }
};
