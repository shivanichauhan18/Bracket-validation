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

app.post("/validation",(req,res)=>{
    var brackets=req.body.bracket;
    let isMatchingBrackets = function (str) {
        let stack = [];
        let map = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
    
        for (let i = 0; i < str.length; i++) {
    
            // If character is an opening brace add it to a stack
            if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
                stack.push(str[i]);
            }
            //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
            else {
                let last = stack.pop();
    
                //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
                if (str[i] !== map[last]) {return false};
            }
        }
        // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
            if (stack.length !== 0) {return false};
    
        return true;
    }
    var data=isMatchingBrackets(brackets)
    res.send(data)


    console.log(data);
})

app.listen(8000,()=>{
    console.log("8000 pr sunta hai....")
})


// SELECT * FROM eCommerce.attributes JOIN shivani.education;
