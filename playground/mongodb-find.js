// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ad0bd567e70d632e8133105')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find todo', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos:', count);
    // }, (err) => {
    //     console.log('Unable to find todo', err);
    // });

    db.collection('Users').find().count().then((count) => {
        console.log('bella,', count);
    })

    //client.close();
});