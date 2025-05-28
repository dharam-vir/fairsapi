const express = require('express');
const { validateCategory } = require('../validation/validateCategory');
const router = express.Router();
const categoryController = require("../controller/categoryController")


router.post("/", (req, res) => {
    res.send("check")
  })

router.post("/create", validateCategory, categoryController.create) 
router.get("/read",categoryController.read)
router.patch("/update",categoryController.update)
router.delete("/delete",categoryController.categoryDelete)
router.get("/search", categoryController.search)
router.get("/list",categoryController.list)

module.exports = router
