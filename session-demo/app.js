const express = require("express");
const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: {secure:true}
  })
);

app.get("/", (req, res) => {
  res.send("welcome to session");
});

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`you visited the site ${req.session.count} times`);
});

app.get("/setname", (req, res) => {
  req.session.username = "gunjan dawar";
  res.redirect('/greet');
});

app.get('/greet' , (req,res)=>{
    let {username = "anonymous"} = req.session;
    res.send(`hi from ${username}`)
})


app.listen(8089, () => {
  console.log("server connected at 8089");
});
