const express = require ('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const UsersRouter = require ('./controllers/UsersRouter')
const AdminsRouter = require ('./controllers/AdminsRouter')
const XMLHttpRequest = require('xhr2')
const PORT = process.env.PORT || 1010

//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.use(express(__dirname + '/views'))
app.use("/public", express.static(path.join(__dirname, 'public')));

app.use('/userauth', UsersRouter);
app.use('/adminauth', AdminsRouter);


// routes

app.get('/', (req, res) => {
    res.render('corepage')
})

app.get('/UserAuth', (req, res) => {
    res.render('userauth')
})

app.get('/AdminAuth', (req, res) => {
    res.render('adminauth')
})




app.post('/Usersreg', async (req, res) => {
    
    const formData  = JSON.stringify( req.body);
    console.log(formData);
    const  http = new XMLHttpRequest();
    const  url = "http://localhost:1010/userauth/Usersregistration"
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

})

app.post('/Adminssreg', async (req, res) => {
    
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

})













async function launch(){
    try {
        await mongoose.connect('mongodb+srv://testwork11:qwerty12345@testwork11.1m3f6.mongodb.net/testwork11?retryWrites=true&w=majority',{ useNewUrlParser: true } , { useUnifiedTopology: true },)
    } catch (error) {
        console.log(error);
    }
}


//launch 
launch();
app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
})

