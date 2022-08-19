const express = require('express');
const app = express()
require('dotenv').config()

//middleware
app.use(function (req, res, next) {
    const date = new Date()
    console.log(req.method, req.path, date.toISOString().split('T')[0])
    next()
})


//home routing
app.get('/', (req, res) => res.send("Home"))


app.listen(process.env.PORT, () => console.log('App running at port', process.env.PORT))
