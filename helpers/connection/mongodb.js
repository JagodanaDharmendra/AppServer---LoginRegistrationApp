const { MongoClient } = require("mongodb");

async function connect() {
  console.log("connect----------------------");
  const MONGO_DBNAME = "react-app";
  const connectionUrl =
    "mongodb+srv://guest:guest0001@first.7imhk.mongodb.net/react-app?retryWrites=true&w=majority";

  var connection = null;
  try {
    const client = new MongoClient(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection = await client.connect();
  } catch (e) {
    console.log(e);
    process.exit(e);
  }
  console.log("connected");
  console.log(connection);
  exports.db = connection.db(MONGO_DBNAME);
  return connection.db(MONGO_DBNAME);
}
// Use connect method to connect to the server
exports.connect = connect;
