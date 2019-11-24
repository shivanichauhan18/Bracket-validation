express = require("express")
const path = require('path');
var bodyParser = require("body-parser");

app=express()

app.use(bodyParser.urlencoded({ extended: false }));


app.get("/validation",(req,res)=>{
    res.sendFile(path.join(__dirname+'/validation_form.html'));

})


app.post("/new",(req,res)=>{
    var str1="{,[,("
    var str2="},],)"
    
    var user_name=req.body.bracket;
    var a=user_name.split("")
    var count1=0;
    var count2=0;

    for(var i=0; i<a.length; i++){
        if (str1.includes(a[i])){
            count1=count1+1
        }else{
            count2=count2+1
        }
    }if (count1===count2){
        res.send("true")
    }else{
        res.send("false")
    }
    console.log(user_name)

})



app.listen(8000,()=>{
    console.log("8000 pr sunta hai....")
})


// SELECT * FROM eCommerce.attributes JOIN shivani.education;
