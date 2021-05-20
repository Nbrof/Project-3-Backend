require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const mongoose = require("./db/connection")

const PORT = process.env.PORT


const app = express()

app.use(cors()); 
app.use(express.json()); 
app.use(morgan("tiny")); 

app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'You have hit the default route'
    })
})


app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})