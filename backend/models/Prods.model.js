
const mongoose = require("mongoose")

const Prods = mongoose.model("Prods", new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: String
    },
    discrip: {
        type: String
    },
}))

module.exports = { Prods }
