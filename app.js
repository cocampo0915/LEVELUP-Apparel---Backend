var express = require('express');
var logger = require('morgan');
var cors = require('cors');
// router here

//
require('dotenv').config();
require('./config/database');

// initialize express app
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

// mount router

module.exports = app;