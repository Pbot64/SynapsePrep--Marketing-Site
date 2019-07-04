const mongoose = require('mongoose');

let cachedDb = null;

console.log('outside-cachedDB:', cachedDb);
async function connectToDatabase(uri) {
  if (cachedDb) {
    console.log('=> using cached database instance');
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const db = await mongoose.connect(uri, { useNewUrlParser: true });

  console.log('New MongoDB Connected');

  // Cache the database connection and return the connection
  cachedDb = db;
  return db;
}

module.exports = async function() {
  console.log('insideMongo: hello');
  await connectToDatabase(process.env.MONGODB_URI);
};
