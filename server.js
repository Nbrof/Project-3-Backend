require("dotenv").config()
const express = require("express")
const mongoose = require("./db/connection")
const morgan = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT


const app = express()
const iceRouter = require('./controllers/products')
const signRouter = require('./controllers/signups')
const logRouter = require('./controllers/login')
const parlourRouter = require('./controllers/parlour')

app.use(cors()); 
app.use(express.json()); 
app.use(morgan("tiny")); 

app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'You have hit the default route'
    })
})

app.use("/icecream", iceRouter);
app.use("/signup", signRouter);
app.use("/login", logRouter)
app.use("/parlour", parlourRouter)


app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})