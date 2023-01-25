const {MongoClient} = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://findmyGCtest:iSwwxqUpow68d66G@cluster0.o52vb2b.mongodb.net/courseDB')
            .then((client)=>{
                dbConnection = client.db()
                console.log("succesful connection")
                return cb()
            })
            .catch(err=>{
                console.log(err)
                return cb(err)
            })
    },
    getDB: () => dbConnection
}