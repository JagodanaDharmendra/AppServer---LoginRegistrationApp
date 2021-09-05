const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://guest:guest0001@first.7imhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connection to database done...");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);