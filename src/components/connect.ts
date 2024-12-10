import { MongoClient, ServerApiVersion, MongoClientOptions } from 'mongodb';

const uri = "mongodb+srv://dayank:<db_password>@comment-feedback-app.6wtgg.mongodb.net/?retryWrites=true&w=majority&appName=comment-feedback-app";

// Define the options explicitly with the MongoClientOptions type
const options: MongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1, // ServerApiVersion.v1 ensures compatibility
    strict: true,
    deprecationErrors: true,
  },
};

const client = new MongoClient(uri, options);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
