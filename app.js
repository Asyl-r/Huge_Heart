const express = require("express");
const bodyParser = require('body-parser')
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded ({ extended: false}))
app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    res.render('/views/main.ejs')
})

app.post('/',(req, res) => {
    res.render('/views/main.ejs')
})

app.get('/home',(req, res) => {
    res.render('/views/Home.ejs')
})

app.post('/home',(req, res) => {
    res.render('/views/Home.ejs')
})

app.get('/login', (req, res) => {
    res.render('/views/authentication.ejs')

})

app.post('/authentication', ((req, res) => {

}))

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})

