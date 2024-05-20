
const express = require("express")
const { ProdsController } = require("../controllers/Prods.controller")
const router = express.Router()

router.get("/", ProdsController.getAll)
router.get("/:id", ProdsController.getById)
router.post("/", ProdsController.add)
router.delete("/:id", ProdsController.delete)
router.put("/:id", ProdsController.edit)

module.exports = router 
