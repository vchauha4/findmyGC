
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017"
connect()
async function connect(){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const db = client.db("CoursDB")
        console.log("connected to database"+db.databaseName)
    }
    catch(ex){
        console.error("something bad happened"+ex)
    }

    finally{
        client.close()
    }
}

