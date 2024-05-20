
const { Prods } = require("../models/Prods.model")

const ProdsController = {
    getAll: async (req, res) => {
        try {
            const items = await Prods.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Prods.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newBlog = new Prods({ ...req.body })
            await newBlog.save()
            const items = await Prods.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Prods.findByIdAndDelete(id)
            const items = await Prods.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Prods.findByIdAndUpdate(id, { ...req.body })
            const items = await Prods.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { ProdsController }
