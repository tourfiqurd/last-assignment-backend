const express = require("express")
const app = express()
require('dotenv').config()
const port = 5000


app.get("/", (req, res) => {
    res.send("running youtube database")
})

app.listen(port, () => {
    console.log("running port at", port, process.env.DB_PASS,);
})