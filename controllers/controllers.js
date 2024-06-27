const Article = require('../models/articleSchema');
const moment = require('moment');

const getHome = (req, res) => {
    Article.find().sort({ createdAt: -1 })
        .then((results) => {
            res.render("index", { posts: results, moment: moment });
        })
        .catch((err) => {
            console.log(err);
        });
};


const getPost = (req, res) => {
    Article.findById(req.params.id)
        .then((userResult) => {
            res.render("post", { moment: moment, post: userResult });
        })
        .catch((err) => {
            console.log(err);
        });
};

const getContact = (req, res) => {
    res.render('contact')
}

const getAbout = (req, res) => {
    res.render('about')
}

const getNew = (req, res) => {
    res.render('new')
}

const getEdit = (req, res) => {
    Article.findById(req.params.id)
        .then((post) => {
            res.render('edit', { post });
        })
        .catch((err) => {
            console.log(err);
        });
};

const createPost = (req, res) => {
    Article.create(req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
}

const updatePost = (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
}

const deletePost = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

// Add this to your routes


module.exports = {
    getHome,
    getAbout,
    getContact,
    getNew,
    getPost,
    createPost,
    updatePost,
    getEdit,
    deletePost
};