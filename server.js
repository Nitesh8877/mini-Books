const express=require('express');

const serverConfig=require('../configs/server.config');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('../routes/booke.route.js')(app);


app.listen(serverConfig.PORT,()=>{
    console.log(`application started this port number ${serverConfig.PORT}`)
})