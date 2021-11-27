var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const fetch= require('node-fetch')
var assert = require('assert')
const router = express.Router()
const url = 'mongodb://localhost/UserDBex'

const DB = 'mongodb+srv://sanya:SanyaJain@cluster0.hffcg.mongodb.net/cryptoData?retryWrites=true&w=majority'

const app = express()
app.use(cors())

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection successful`);
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

app.get('/data', async(req, res) => {
    console.log('appvue');
                
                try{
                    const response = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');
                    const responseData = await response.json();
                    console.log(responseData);
                    res.send(responseData)
                }
                catch(error){
                    console.log(error);
                    res.send(error)
                    
                }
})

router.get('/get-data', function(req, res, next) {
    var resultArray = [];
    mongo.connect(url, function(err, DB){
        assert.equal(null, err);
        var cursor = DB.collection('users').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            DB.close();
            res.send();
        });
    });
});