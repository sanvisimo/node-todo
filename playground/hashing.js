const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 5
};

let token = jwt.sign(data, '123abc');
console.log(token);



let decoded = jwt.verify(token + 1, '123abc');
console.log(decoded);

// let message = "sono bello";
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);
//
// let data = {
//     id: 5
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('ok');
// } else {
//     console.log('no ok');
// }
