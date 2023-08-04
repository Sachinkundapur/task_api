const express = require("express")
const app = express()
const router = require("./routes/task")
const connectDb = require("./db/connect")
require('dotenv').config()



app.use(express.json())



app.use("/api/tasks", router)

const port = 3000


const start = async() => {
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`port listening on port ${port}`)
        })

    }catch(error){
        console.log(error)
    }
}
start()