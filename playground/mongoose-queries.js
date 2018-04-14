const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

let id = "5ad0d121d77f8759c829da4c";

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// }).catch((e) => {
//     console.log(e.message);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// }).catch((e) => {
//     console.log(e.message);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => {
//     console.log(e.message);
// });


User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User by Id', JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e.message);
});
