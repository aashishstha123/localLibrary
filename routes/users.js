const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("User route is successfully accessed")
})

module.exports = router