const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');


    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID("5ad0c1e63453a8184248f48d")
    //     },
    //     {
    //         $set: {
    //             completed: false
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID("5ad0c7273453a8184248f755")
        },
        {
            $set: {
              name: 'altro simo'
            },
            $inc: {
                age: 2
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    //client.close();
});