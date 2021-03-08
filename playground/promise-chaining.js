require('../src/db/mongoose')
const User = require('../src/models/User')
const Task = require('../src/models/Task')

// User.findByIdAndUpdate('601359dc5db3a0ebb496cd37', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('601359dc5db3a0ebb496cd37', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

Task.findByIdAndDelete('6014a825f556651eb341b906').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6014a825f556651eb341b906').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})



