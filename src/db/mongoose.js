const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
}) 


// const me = new User({
//     name: 'Ricahrd',
//     age: 22,
//     email: 'zx980405@gmail.com',
//     password: 'nodejs123'
// }).save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// // const task = new Task({
// //     description: 'Pay the bill',
// //     completed: false
// // }).save()