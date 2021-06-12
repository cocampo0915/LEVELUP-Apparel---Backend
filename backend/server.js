const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');

// routes
var userRoute = require('./routes/userRoute');
var productRoute =  require('./routes/productRoute');
var orderRoute = require('./routes/orderRoute');

require('dotenv').config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch(error => console.log(error.reason));

// initialize express
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => { console.log("Server started at http://localhost:5000") });
