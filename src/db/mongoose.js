const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
 
// const me = new User({
//     name: '   Gen',
//     email: 'GEN@GMAIL.COM',
//     age: 25,
//     password: 'Password1' 
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const task = new Task({
//     description: 'Clean house',
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

