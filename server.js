//============== DEPENDENCIES ===============//
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var path = require('path');
var logger = require('morgan');
var cheerio = require('cheerio');

var app = express();
var PORT = process.env.PORT || 4000;

//============== MODELS / SCHEMAS ===============//
var Note = require('./models/Note');
var Article = require('./models/Article');
var Save = require('./models/Save');

//============== MIDDLEWARE - PARSE & LOG ===============//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));

//============== DATABASE CONFIGURATION ===============//
mongoose.Promise = Promise;
var dbConnect = process.env.MONGODB_URI || "mongodb://localhost/mongoScrapper";
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect(dbConnect);
}
var db = mongoose.connection;

db.on('error', (err) => {
    console.log('Mongoose Error', err);
});
db.once('open', () => {
    console.log('Mongoose connection is successful');
});

//============== ROUTING ===============//
require("./routes/scrape")(app);
require("./routes/html")(app);

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"));
});


app.listen(PORT, () => {
    console.log("http://localhost:"+PORT);
})












