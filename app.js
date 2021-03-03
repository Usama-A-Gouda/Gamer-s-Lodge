const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path =require('path');
const fortniteRoute = require('./BackEnd/routes/fortnite/main');
const pubgRoute = require('./BackEnd/routes/pubg/main');
const soulPurge = require('./BackEnd/routes/soul-purge/main');
const divRoute = require('./BackEnd/routes/div2/main');




app.get ("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));  
});


// to use body parser 
app.use(bodyParser.urlencoded({extended: false}));

//using fortnite routes ! 
app.use('/fortnite',fortniteRoute);
//using pubg routes
app.use('/pubg',pubgRoute);
//using pubg routes
app.use('/division2',divRoute);
//using soul purge routes 
//app.use('/soul-purge',soulPurge);
// to use ejs
app.set('view engine' , 'ejs');

app.set('views','./BackEnd/views');
app.use(express.static(path.join(__dirname,'public')));

app.get('*', function(req, res){
    res.status(404).render("pageerr");
  });
  
app.listen(8080,()=> {
    console.log('welcome to gamers lodge ..');
})

