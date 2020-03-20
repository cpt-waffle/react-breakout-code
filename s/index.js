const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

app.get('/', (req,res) => {
    console.log("ping");
    res.json({foo: 'bar'});
})


app.listen(8080, () => console.log("server is on"));