//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
const url = require('../url')
//create mongo client
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//create rest api
router.get("/", (req, res) => {
    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection')
        else {
            let db = conn.db('nodedb')
            db.collection('products').find().toArray((err, array) => {
                if (err)
                    console.log('Error:- ', err)
                else {
                    console.log('Data Sent')
                    res.json(array)
                    conn.close()
                }
            })
        }
    })
})


//export router
module.exports = router
