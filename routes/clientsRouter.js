//_____________________________________ API for clients __________________________
const express = require('express')
const router = express.Router()
const clientController = require('../controller/clientController')

router.post("/", (req, res) => {
    res.send("check")
  })

router.post("/create", clientController.create)
router.get("/read/:id", clientController.read);
router.patch("/update/:id", clientController.update);
router.delete("/delete/:id", clientController.clientDelete);
router.get("/search", clientController.search);
router.get("/list", clientController.client);

module.exports = router