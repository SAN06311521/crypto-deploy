var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDBex'

const DB = 'mongodb+srv://sanya:SanyaJain@cluster0.hffcg.mongodb.net/cryptoData?retryWrites=true&w=majority'

const app = express()
app.use(cors())

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

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log('Server started')
})