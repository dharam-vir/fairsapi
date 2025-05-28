const express = require('express');
const router = express.Router();
const pageController = require('../controller/footerController');


router.post("/", (req, res) => {
    res.send("check")
  })
  
router.get('/footer-url', pageController.Footerurl);
router.post('/footer-url-post', pageController.PostFooterurl);

module.exports = router;