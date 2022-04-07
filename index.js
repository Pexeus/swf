const express = require("express")
const fs = require("fs")

const app = express()
const port = 80

app.use(express.json())
app.use("/", express.static("client"))
app.use("/swf", express.static("swf"))

app.get("/files", (req, res) => {
    const files = fs.readdirSync("./swf")
    
    res.json(files)
}) 

app.listen(port, () => {
    console.log("[online]");
})