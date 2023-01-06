const {MongoClient} = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/CoursDB')
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