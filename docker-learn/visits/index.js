const express = require('express');
const app = express();

const redis= require('redis');
const client = redis.createClient({
    host:'redis-server',
    port: 6379,
});
client.set('visits', 0);

client.on('connect', () => {
    console.log('Connected to Redis');
})

client.on('error', (err) => {
    console.log(err);
})



app.get('/', (req, res) => {
    res.send('Hello World!');
    client.get('visits', (err, visits) => {
        res.send("visits are : " , visits);
        client.set('visits',parseInt(visits)+1);
    })
})

app.listen(8081, () => {
    console.log('Example app listening on port 8081!');
})