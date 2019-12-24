const express = require ('express');
const mongoose = require ('mongoose');
const app = express();

var dbName = "MedTourMain";
var dbUsername = "Qikabodi";
var dbPassword = "bilkentbitirme";
var dbConnectionString = "mongodb://" + dbUsername + ":" + dbPassword + "@cluster0-shard-00-00-mezhk.mongodb.net:27017,cluster0-shard-00-01-mezhk.mongodb.net:27017,cluster0-shard-00-02-mezhk.mongodb.net:27017/"+ dbName + "?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
app.use(express.json());

//Connect to Mongo
mongoose
    .connect(dbConnectionString , {
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then( ()=> console.log('MongoDb Connected [' + dbName + ']...'))
    .catch( err => console.log(err));



//Use routes
app.use('/api/clinics', require('./routes/api/clinics'));
app.use('/api/treatments', require('./routes/api/treatments'));
app.use('/api/ratings', require('./routes/api/ratings'));
app.use('/api/phoneNumbers', require('./routes/api/phoneNumbers'));
app.use('/api/doctors', require('./routes/api/doctors'));
app.use('/api/transportation', require('./routes/api/transportation'));
app.use('/api/tourData', require('./routes/api/tourData'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 3001;

app.listen(port, ()=> console.log(`Server started on port ${port}`));

