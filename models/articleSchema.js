const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blogTitle: {
        type: String,
        required: true
    },
    blogBody: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Article = mongoose.model('Article', blogSchema);

module.exports = Article;
