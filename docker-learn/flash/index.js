const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("Hello World!");
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});

