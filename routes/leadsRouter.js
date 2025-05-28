const express = require('express')
const router = express.Router()
const leadController = require('../controller/leadController')

router.post("/lead/create", leadController.create)
router.get("/lead/read/:id", leadController.read)
router.patch("/lead/update/:id", leadController.update)
router.delete("/lead/delete/:id", leadController.delete)
router.get("/lead/search", leadController.search)
router.get("/lead/list",leadController.list)


module.exports = router