
const express = require('express')
const multer = require('multer')
const app = express();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,resp,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+".jpg")
        }
    })
}).single("item_file")
app.post("/upload",upload,(req,resp) => {
    resp.send("File upload")
})
app.listen(5000)