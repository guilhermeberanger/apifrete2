const express = require('express');//EXPRESS
const app = express();
//const formData = require('express-form-data');
const bodyParser = require('body-parser'); //FORMATAÇÃO DO POSTMAN

//IMPORT ROUTES

//app.use(formData.parse())
//app.set('view engine', 'pug');
app.use(bodyParser.json())

const postsRouter = require('./Routes/post');
app.use('/post', postsRouter);

app.use('/detalhes', postsRouter);

//ROUTES

app.get('/', (req, res) =>{
    res.send('Teste 1 - central do frete')
});


//PORTA 
app.listen(process.env.PORT || 3000);