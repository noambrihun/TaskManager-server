const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = process.env.PORT || 3000;
const tasksRoutes = require("./routes/tasks")
require("dotenv").config()


const app = express()
app.use(cors({
  origin: "https://task-manager-client-git-main-noam1.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))
app.use(express.json())
app.use("/api", tasksRoutes)


mongoose.connect(process.env.Mongo_URI)
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err))

app.get("/", (req,res)=>{
  res.send("Code Task Manager API is running")
})



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});