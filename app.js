//importing function 
const express = require("express")
const hbs = require("hbs")
const path = require("path")
const fs = require("fs");


const content = fs.readFileSync("sample.txt" , "utf-8");
var nums1=Number(content.split(" , ")[0])
var nums2=Number(content.split(" , ")[1])
var nums3=Number(content.split(" , ")[2])
console.log(nums1,nums2,nums3)

// running express 
const app = express()
// setting port
const port = process.env.PORT || 4444
const static_path = path.join(__dirname, "/public")
app.set("view engine", "hbs")
app.use(express.static(static_path))


app.get("", (req, res) => {
    res.render("index", {
        num1: nums1,
        num2: nums2,
        num3: nums3
    })

})



app.listen(port, () => {
    console.log(`Listning on port `, port)
})