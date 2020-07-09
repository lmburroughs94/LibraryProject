//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var MongoDB = 'mongodb://127.0.0.1/my_database'; 
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error evenr (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
