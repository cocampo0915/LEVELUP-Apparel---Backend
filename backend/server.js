const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
var userRoute = require('./routes/userRoute');
var productRoute =  require('./routes/productRoute');

require('dotenv').config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => { console.log("Server started at http://localhost:5000") });
