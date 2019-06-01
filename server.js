const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;


var app = express();
app.set('vew engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () =>{
return new Date().getFullYear();
});
hbs.registerHelper('screemIt' , (text) =>{
    return text.toUpperCase();
})
app.use((req, res, next) => {
    res.render('maintenance.hbs');

})


app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'WELCOME TO THE HOME PAGE',

    });
    
})

app.use((req, res, next) => {
    res.render('maintenance.hbs');

})
app.get('/about', (req, res) =>{
    res.render('about.hbs', {
        pageTitle: 'about page',
     
    });
})


app.listen(port, () =>{
    console.log(`${port}  is working now`);
});
