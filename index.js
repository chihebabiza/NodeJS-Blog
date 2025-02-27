const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const controllers = require('./controllers/controllers');
const Article = require('./models/articleSchema');

// Middleware
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set("view engine", 'ejs');
app.use(express.urlencoded({ extended: true }));


// Get requests
app.get('/', controllers.getHome);
app.get('/post.html:id', controllers.getPost);
app.get('/new.html', controllers.getNew);
app.get('/about.html', controllers.getAbout);
app.get('/contact.html', controllers.getContact);
app.get('/edit:id', controllers.getEdit);
app.get('/login', controllers.getLogin);
app.get('/signup', controllers.getSignup);
// Post requests
app.post('/new.html', controllers.createPost);

// Put request
app.put('/edit/:id', controllers.updatePost); // Route to handle update

//  Delete request
app.delete('/delete/:id', controllers.deletePost);

mongoose.connect('mongodb+srv://3vWL3pk17lvhh79K:3vWL3pk17lvhh79K@cluster0.yu2bxuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch((err) => {
        console.log(err);
    })