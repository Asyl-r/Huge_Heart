const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded ({ extended: false}))
app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    res.render('index.ejs')
})

app.post('/',((req, res) => {
    res.render('index.ejs')
}))

app.get('/home',((req, res) => {
    res.render('Home.ejs')
}))

app.post('/home',((req, res) => {
    res.render('Home.ejs')
}))

app.get('/grocery', ((req, res) => {
    res.render('Grocery.ejs')
}))

app.post('/grocery', ((req, res) => {
    res.render('Grocery.ejs')

app.get('/beauty,health&personal care', ((req, res) => {
    res.render('Beauty.ejs')
}))

app.post('/beauty,health&personal care', ((req, res) => {
    res.render('Beauty.ejs')

app.get('/clothing', ((req, res) => {
    res.render(__dirname+'Other.p/Clothing.html')

}))
app.get('/delivery', ((req, res) => {
    res.render(__dirname+'Other.p/Delivery.html')

}))
app.get('/electronics', ((req, res) => {
    res.render(__dirname+'Other.p/Electronics.html')

}))
app.get('/goods bag', ((req, res) => {
    res.render(__dirname+'Other.p/goodsbag.ejs')

}))
app.get('/patio&garden', ((req, res) => {
    res.render(__dirname+'Other.p/Patio.html')

}))
app.get('/pharmacy', ((req, res) => {
    res.render(__dirname+'Other.p/Pharmacy.html')

}))
app.get('/Q&A', ((req, res) => {
    res.render(__dirname+'Other.p/Q&A.html')

}))
app.get('/reviews', ((req, res) => {
    res.render(__dirname+'Other.p/reviews.html')

}))

app.get('/login', ((req, res) => {
    res.render(__dirname+'Other.p/Login.html')

}))

app.post('/login', ((req, res) => {

}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`))
}))
}));

