//จัดการ Routing

const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"../webpages/index.html"))
})

router.get("/product/:id",(req,res)=>{
    const prodid = req.params.id
    if(prodid === "1"){
        res.sendFile(path.join(__dirname,"..//webpages/product1.html"))
    }else if(prodid === "2"){
        res.sendFile(path.join(__dirname,"..//webpages/product2.html"))
    }else if(prodid === "3"){
        res.sendFile(path.join(__dirname,"..//webpages/product3.html"))
    }else{
        res.redirect('/')
    }
})

module.exports = router