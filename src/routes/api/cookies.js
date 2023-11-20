import { MongoClient } from 'mongodb';

const mongoURI = 'mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/'; // Replace with your MongoDB connection string
const dbName = 'form'; // Replace with your database name

export async function post(req, res) {
  const cookiesData = req.body;

  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(mongoURI);
    const db = client.db(dbName);
    const collection = db.collection('cookies');

    // Insert cookies data into MongoDB
    const result = await collection.insertOne(cookiesData);

    console.log('Cookies data inserted successfully:', result.insertedId);
    res.status(200).json({ message: 'Cookies data inserted successfully' });
  } catch (error) {
    console.error('Failed to insert cookies data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
