require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express(); // ✅ Must be defined before routes
const PORT = process.env.PORT || 3008;

const mongoUri = process.env.MONGO_URI;
const dbName = 'ITEM';

if (!mongoUri) {
  console.error("❌ MONGO_URI is undefined. Check your .env file.");
  process.exit(1);
}

let db;
app.use(express.json());

// MongoDB connection and server start
async function startServer() {
  try {
    const client = new MongoClient(mongoUri, { useUnifiedTopology: true });
    await client.connect();
    db = client.db(dbName);
    console.log(`✅ Connected to MongoDB Atlas`);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message);
    process.exit(1);
  }
}

startServer();

// ROUTES – keep these AFTER app is defined
app.post('/items', async (req, res) => {
  try {
    const result = await db.collection('items').insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Create failed', message: err.message });
  }
});

app.get('/items', async (req, res) => {
  try {
    const items = await db.collection('items').find().toArray();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Read failed', message: err.message });
  }
});
