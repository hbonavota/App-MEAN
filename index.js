const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const port = 8001;

const app = express();

//connect to DB
connectDB()
app.use(cors())
app.use(express.json())
app.use('/api/products', require('./routes/product'))


app.listen(port, () => {
    console.warn(`server on port ${port}`)
})