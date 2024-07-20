const express = require('express');
const app =  express();
const cookieParser = require('cookie-parser');


app.use(cookieParser('youneedabettersecret'));

app.get('/' , (req,res)=>{
    // console.log(req.cookies);
    // res.send(req.cookies);
    res.send(req.signedCookies);
})

app.get('/setcookie' , (req,res)=>{
    res.cookie('mode' , 'light');
    res.cookie('location' , 'delhi');
    res.cookie('username' , 'samarth');
    res.send('ent you a cookie successfully');
})

app.get('/greet' , (req,res)=>{
    let {username} = req.cookies;
    // console.log(req.cookies);
    res.send(`hi bro ${username} hope you r doing good`);
})

app.get('/getsignedcookie' , (req,res)=>{
    res.cookie('earthquake' , 'aa gaya' , {signed:true});
    res.send('cookies sent successfully')
})

app.listen(5000 ,(req,res)=>{
    console.log("server running at 5000");
})