const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+'/views/about.html')
})

app.get("/american", (req, res)=>{
    res.sendFile(__dirname+'/views/1american.html')
})
app.get("/japan", (req, res)=>{
    res.sendFile(__dirname+'/views/2japan.html')
})
app.get("/russian", (req, res)=>{
    res.sendFile(__dirname+'/views/3russian.html')
})
app.get("/brazil", (req, res)=>{
    res.sendFile(__dirname+'/views/4brazil.html')
})
app.get("/portugal", (req, res)=>{
    res.sendFile(__dirname+'/views/5portugal.html')
})
app.get("/chine", (req, res)=>{
    res.sendFile(__dirname+'/views/6chine.html')
})
app.get("/egito", (req, res)=>{
    res.sendFile(__dirname+'/views/7egito.html')
})
app.get("/australian", (req, res)=>{
    res.sendFile(__dirname+'/views/8australian.html')
})
app.get("/african", (req, res)=>{
    res.sendFile(__dirname+'/views/9african.html')
})
app.listen(8080, ()=>{
    console.log("its running....")
})