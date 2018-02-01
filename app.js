const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Connect to Mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {
    //useMongoClient: true
}) //pass in a database (remote or local)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// load Idea model
require('./models/Idea');
const Idea = mongoose.model('ideas');

// Express Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'           //main.handlebars
}));
app.set('view engine', 'handlebars');


// Index Route
app.get('/', (req, res) => {
    const title = 'Welcome';  //example of assigning a variable for view routing
    res.render('index', {
        title: title
    });            //index.handlebars
});

// About Route
app.get('/about', (req, res) => {
   res.render('about');             //about.handlebars
});

const port = 5000;

app.listen(port, () => { //arrow function --> ES6 style
    console.log(`Server started on port ${port}`);  //backticks, not quotes --> ${var}  ES6 style
});
