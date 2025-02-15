const express = require('express')
const {mongoose} = require('mongoose')
const app = express()
const port = 3000
const Fashionitem = require('./models/Fashionitem.js')
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addfashionitem', async (req, res) => {
    try{

        const newdata = new Fashionitem(req.body);
        await newdata.save();
        res.send("Data save successfully")
    }
    catch(err){
        console.log("Data not send")
    }
  })

//   app.get('/getfashionitem', async (req, res) => {
//     try{

//         const newdata = await Fashionitem.find({});
//         res.json(newdata);
        
//         res.send("Data save successfully")
//     }
//     catch(err){
//         console.log("Data not received")
//     }
//   })

mongoose.connect("mongodb+srv://avcoe:31101418@avcoe.lolvb.mongodb.net/ ").then(()=>
    console.log("Mongodb Database Connected Successfully")
    );


app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})
