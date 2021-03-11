const express = require('express');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');
const pool = require('./db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// app.use('/', router);


pool.query("Select NOW()", (err, result) => {
    if (err) {
        console.log('Failed to Connect to Database')
        console.log(err.stack)
    } else {
        console.log('Connected to Database')
    }
})

const server = app.listen(8080, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Taghareed listening at port %s", port);
})
