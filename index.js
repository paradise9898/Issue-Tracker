const express = require ('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const UsersRouter = require ('./controllers/UsersRouter')
const AdminsRouter = require ('./controllers/AdminsRouter')
const UserIssueRouter = require ('./controllers/UserIssueRouter')
const AdminSolutions = require ('./controllers/AdminsSolutionRouter')
const XMLHttpRequest = require('xhr2')
const PORT = process.env.PORT || 1010
const lkl = require('./models/UserIssue')
const lkll = require('./models/UserIssue')
const sol = require('./models/AdminSolutions')
/////////////////////////////////////////////////////////////////////



//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
app.set('view engine', 'pug')



app.use(express(__dirname + '/views'))
app.use("/public", express.static(path.join(__dirname, 'public')));





//middlewares
app.use('/userauth', UsersRouter);
app.use('/adminauth', AdminsRouter);
app.use('/userissue', UserIssueRouter);
app.use('/solution', AdminSolutions);


// routes

//front
app.get('/', (req, res) => {
    res.render('corepage')
})

app.get('/UserAuth', (req, res) => {
    res.render('userauth')
})

app.get('/AdminAuth', (req, res) => {
    res.render('adminauth')
})





//Authrisation and issue posting
app.post('/userauth', async (req, res) => {
    
    const formData  = JSON.stringify( req.body); 
    console.log(formData);
    const  http = new XMLHttpRequest();
    const  url = "http://localhost:1010/userauth/usersregistration"
    const  method = "POST";
    const  data = formData

    http.open(method, url,);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
      if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
        console.log(JSON.parse(http.responseText));
      }
    }

    http.send(data);

    res.redirect('userpage')
});

app.post('/adminauth', async (req, res) => {
    
    const formData  = JSON.stringify( req.body);
    console.log(formData);
    const  http = new XMLHttpRequest();
    const  url = "http://localhost:1010/adminauth/adminsregistration"
    const  method = "POST";
    const  data = formData

    http.open(method, url,);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
      if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
        console.log(JSON.parse(http.responseText));
      }
    }

    http.send(data);


    res.redirect('adminpage')
});


app.post('/userissue', async (req, res) => {

    const formData  = JSON.stringify( req.body);
    console.log(formData);
    const  http = new XMLHttpRequest();
    const  url = "http://localhost:1010/userissue/userissue"
    const  method = "POST";
    const  data = formData

    http.open(method, url,);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
      if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
        consolelog(JSON.parse(http.responseText));
      }
    }

    http.send(data);

  

    res.redirect('userpage')

});

app.get('/userpage', async (req, res) => {
  try {
    const issue = await lkll.find();
    const solution = await sol.find()
   res.render('userpage', {x:issue, y:solution});

  } catch (error) {
    console.log(error);
  }

})

app.post('/solution', function(req, res){
  
    const formData  = JSON.stringify( req.body);
    console.log(formData);
    const  http = new XMLHttpRequest();
    const  url = "http://localhost:1010/solution/adminssolutions"
    const  method = "POST";
    const  data = formData

    http.open(method, url,);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
      if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
       console.log(JSON.parse(http.responseText));
    }
  }

  http.send(data);

  res.redirect('adminpage')
})




//getting data from db
app.get('/data',  async(req, res) => {
    
})




//Getting data from db to admin page
app.get('/adminpage', async (req, res) => {

try {
  const issue = await lkl.find();
  res.render('adminpage', {x:issue})


} catch (error) {
  console.log(error);
}


})









async function launch(){
    try {
        await mongoose.connect('mongodb+srv://issue:issue98@issuetracker.bwh1x.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true } , { useUnifiedTopology: true },)
    } catch (error) {
        console.log(error);
    }
}


//launch 
launch();
app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
})

