const express = require('express')
const router = require('./routes/myRouter')



const app = express()
app.use(router)

app.listen(4000,()=>{
    console.log("Starting on port 4000")
})
