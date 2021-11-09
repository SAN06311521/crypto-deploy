const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDBex'

const DB = 'mongodb+srv://sanya:SanyaJain@cluster0.hffcg.mongodb.net/cryptoData?retryWrites=true&w=majority'

const app = express()

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection successfull`);
}).catch((err) => console.log(err));

// con.on('open', () => {
//     console.log('connected..')
// })

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(9000, () => {
    console.log('Server started')
})