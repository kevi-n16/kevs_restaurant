const express = require("express");
const path = require("path")

const app= express();
const PORT = 2020;

app.use(express.static(__dirname));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"Welcome_Page.html"));
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});