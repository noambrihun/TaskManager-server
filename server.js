const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 3000;
const tasks = require("./models/tasks")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/" , tasks)

mongoose.connect("mongodb+srv://Iamnoam_23:kingbr123@noam.cyi4okn.mongodb.net/tasks-manager")
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err))

app.get("/", (req,res)=>{
  res.send("Code Task Manager API is running")
})



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});