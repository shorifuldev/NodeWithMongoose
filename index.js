const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/iSoftDB");

const itemsSchema = new mongoose.Schema({
    ItemName: String,
    Category: String,
    Department: String,
    Price: Number,
    Brand: String,
  });


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

const getItemByName =async () => {
    const itemsModel = mongoose.model("items",itemsSchema)
    let result =await itemsModel.find(
        {
            ItemName: "Vivo v21"
        }
    )

    console.log(result);
}

getItemByName();