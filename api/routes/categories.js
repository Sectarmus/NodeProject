var express = require('express');
var router = express.Router();
const isAuthanticated = true;

router.all("*",(req,res,next)=>{
    if(isAuthanticated){
        next();
    }else{
        res.json({success:"false", error: "Not Authantion"});
    }
})

router.get('/', function(req, res, next){
    res.send('respond with a resource');
});

module.exports = router;