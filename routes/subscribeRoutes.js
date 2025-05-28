const express = require('express');
const router = express.Router();
const subscribeController = require('../controller/subscribeController');

router.post('/',(req, res)=>{
    console.log('check url');
})

router.post('/subsctiption', subscribeController.postSubscribe); 
router.post('/jobs', subscribeController.jobsSearch); 

module.exports = router;