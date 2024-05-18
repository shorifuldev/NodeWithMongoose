/*With out api work */
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/iSoftDB");

// const itemsSchema = new mongoose.Schema({
//     ItemName: String,
//     Category: String,
//     Department: String,
//     Price: Number,
//     Brand: String,
//   });

//   const insert = async () => {
//     const itemsModel = mongoose.model("items", itemsSchema);

//     let data = new itemsModel({
//       ItemName: "MUM Water 1 Ltr",
//       Category: "Water",
//       Department: "Water",
//       Price: parseInt(5),
//       Brand: "MUM",
//     });
//     let result = await data.save();
//     console.log(result);
//   };

//   insert();

// const update = async ()=>{
//     const itemsModel = mongoose.model("items",itemsSchema);

//     let data = await  itemsModel.updateOne(
//         {
//             ItemName:"MUM Water 1 Ltr"
//         },
//         {
//             $set:{Price: parseInt(10)}
//         }
//     )
//     console.log(data);
// }
// update();

// const itemDelete = async ()=>{
//     const itemsModel = mongoose.model("items",itemsSchema);

//     let data =await itemsModel.deleteOne(
//         {
//             ItemName: "Nokia 1110"
//         })

//     console.log(data);

// }
// itemDelete();

// const getAllItems =async ()=>{
//     const itemsModel = mongoose.model("items",itemsSchema);
//     let result = await itemsModel.find()
//     console.log(result);
// }

// getAllItems();

// const getItemByName =async () => {
//     const itemsModel = mongoose.model("items",itemsSchema)
//     let result =await itemsModel.find(
//         {
//             ItemName: "Vivo v21"
//         }
//     )

//     console.log(result);
// }

// getItemByName();

/* With Api work */

const express = require("express");
require("./config");
const items = require("./items");

const app = express();
app.use(express.json());

//create api
app.post("/create", async (req, resp) => {
  let data = new items(req.body);
  let result = await data.save();
  console.log("Done");
  resp.send(result);
});

//read api
app.get("/get", async (req, resp) => {
  let data = await items.find();
  resp.send(data);
});

//update api
app.put("/update/:_id", async (req, resp) => {
  let data = await items.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});

//delete api
app.delete("/delete/:_id", async (req, resp) => {
  let data = await items.deleteOne(req.params);
  resp.send(data);
});

//Search item api
app.get("/search/:key", async (req, resp) => {
    //for geting key ->
    //console.log(req.params.key);
    let data =await items.find(
        {
            "$or":[
                {"ItemName":{$regex:req.params.key}},
                {"Brand":{$regex:req.params.key}}
            ]
        }
    )

    resp.send(data)

});

app.listen(5000);
