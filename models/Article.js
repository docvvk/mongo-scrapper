// Require mongoose
var mongoose = require('mongoose');

// Create schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    byLine: {
        type: String
    },
    // Save note's ObjectId, ref refers to note model
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

// Create Article model with ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;