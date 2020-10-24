const app= require("express")()
const parser= require("body-parser")
const dir= __dirname
const fs= require("fs")
const cors= require("cors")
//Middleware
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())
//GET= Reading,POST= Adding, PUT= Updating, Delete= Deleting 
let candidate= []
function readData() {
    const filename= "data.json"
    const jsonContent= fs.readFileSync(filename, "utf-8")
    candidate=JSON.parse(jsonContent)
}
function saveData(){
    const filename= "data.json"
    const jsonData= JSON.stringify(candidate)
    fs.writeFileSync(filename, jsonData, "utf-8")
}
function delData(index) {
    alert("In delete")
    const filename= "data.json"
    const jsonContent= fs.readFileSync(filename, "utf-8")
    candidate=JSON.parse(jsonContent)
    candidate.splice(index, 1)
    saveData()
}
app.get("/candidate", (req,res)=>{
    readData()
    res.send(JSON.stringify(candidate))
})
app.get("/candidate/:id", (req, res)=>{
    const cddid=req.params.id
    if(candidate.length == 0){
        readData()
    }
    let foundRec= candidate.find((e)=>e.cddId == cddid)
    if(foundRec == null){
        throw "cddloyee not found"
    }
    res.send(JSON.stringify(foundRec))
})
// app.put()
app.put("/candidate", (req, res)=>{
    alert("In put")
    if(candidate.length == 0){
        readData()
    }
    // console.log("Inside");
    let body= req.body
    for(let index= 0;index< candidate.length;index++){
        let element= candidate[index]
        if(element.cddId == body.cddId){
            element.cddName= body.cddName
            element.cddAddress= body.cddAddress
            element.cddSalary= body.cddSalary
            saveData()
            res.send("cddloyee updated successfully")
        }
    }
})
// app.post()
app.post("/candidate", (req, res)=>{
    if(candidate.length == 0){
        readData()
    }
    let body= req.body
    candidate.push(body)
    saveData()
    res.send("cddloyee added successfully")
})
// app.delete()
app.delete("/candidate", (req, res)=>{
    // throw "Not implemented yet"
    alert("Inside");
    if(candidate.length == 0){
        readData()
    }
    let body= req.body
    for(let index= 0;index< candidate.length;index++){
        let element= candidate[index]
        if(element.cddId == body.cddId){
            
            delData()
            res.send("cddloyee deleted successfully")
        }
    }
    let foundRec= candidate.find((e)=>e.cddId == cddid)
    if(foundRec == null){
        throw "cddloyee not found"
    }
    res.send(JSON.stringify(foundRec))
})
app.listen(1234, ()=>{
    console.log("Server available at 1234");
})