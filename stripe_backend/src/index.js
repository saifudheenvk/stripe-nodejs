const { connect } = require("./db/database");
const cors = require('cors')
const morgan = require("morgan");
const userRouters = require("./routes/user")
const paymentRouters = require("./routes/payment")
const express = require("express")



const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/users",userRouters);
app.use("/payment",paymentRouters);

app.get("/",(req,res)=>{
    res.send("Test Node server")
})

connect()

app.listen(process.env.PORT,()=>{
    console.log("Server listening at the port:"+process.env.PORT)
})