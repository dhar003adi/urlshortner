const express = require('express')
const connectToMongo = require("./database/db")
const app = express()
connectToMongo("mongodb://127.0.0.1:27017/url")
const PORT = 5000
app.use(express.json())

app.use("/api/url",require("./routes/urlroute"))
app.use("/api/auth",require("./routes/authroute"))

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`);
})
