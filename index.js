const express = require('express');
const databaseConnect = require('./config/database');
//const authRouter = require('./router/auth');
const bodyParser = require('body-parser');
const signUp = require('./controller/signUp');
const expressLayout = require('express-ejs-layouts')
const uploader = require('./middleware/uploadFile');

require('dotenv').config();
const PORT = process.env.PORT || 4000;
const app = express();
databaseConnect();
// Enable JSON parsing for request bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

//set EJs as the templating engine
app.set('view engine','ejs');
app.use(expressLayout);

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(PORT,()=>{
    console.log(`i am listening on PORT ${PORT}`);
})
app.get('/', (req, res) => {
    res.render("login");
})

app.get('/signup', (req, res) => {
    res.render("signup");
})
app.post('/auth',uploader.single('image1'), signUp.signup); //name image1 should be same as we provided from  frontend