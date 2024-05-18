const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countAPI",()=>{
    count++
    console.log(`event called ${count}`);
})

app.get("/",(req, resp)=>{
    resp.send("get api called")
    event.emit("countAPI")
})

app.get("/search",(req, resp)=>{
    resp.send("Search api called")
})

app.post("/update",(req, resp)=>{
    resp.send("Update api called")
})


app.listen(5000);