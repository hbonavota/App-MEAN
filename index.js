const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 8001

const app = express();

if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config();
}

//connect to DB
connectDB()
app.use(cors())
app.use(express.json())
// app.use( '/',(req, res) => {
//     res.status(200).send("server ready");
// }
// )

app.use('/api/products', require('./routes/product'))


app.listen(port, () => {
    console.warn(`server on port ${port}`)
})