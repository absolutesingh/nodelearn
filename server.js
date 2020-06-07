const express = require('express');
const mongoose = require('mongoos');
const app = express();

mongoose.connect('mongodb://localhost/marvel');
mo