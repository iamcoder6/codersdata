var express = require ('express');
var bodyParser = require ('body-parser');
var morgan = require('morgan');
var config = require('./public/config');

var mongoose = require('mongoose');

var app = express();

//Connecting the Database
mongoose.connect(config.dbLocal,function(err)
{
    if(err){
        console.log(err);
    }else{
        console.log("Connected to database",config.dbLocal);
    }
}
);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.get('*',function(req,res)
{
res.sendFile(__dirname +'/public/index.html');
});
app.listen(config.port, function(err)
{
    if(err)
    {
        console.log(err);
        console.log(err);

        console.log(err);

        console.log(err);

        console.log(err);
        
        console.log(err);
        
        console.log(err);

        
    }
    else{
        console.log("listening on port 3000");
        console.log("listening on port 3000")
    }
})