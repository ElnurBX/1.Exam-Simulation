
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log("connected")
})

app.listen(8080, () => {
    console.log("server running on 8080")
})



const ProdsRouter = require("./routes/Prods.routes");
app.use("/api/Prods", ProdsRouter);
