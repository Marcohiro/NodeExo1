const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/myproject';
  // Database Name
  const dbName = 'myproject';
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection('dates');
    
    var myobj = {date : new Date()}

    col.insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //db.close();
      });

    col.find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        //db.close();
      });
    
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
})();