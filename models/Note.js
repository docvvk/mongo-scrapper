// Require mongoose
var mongoose = require('mongoose');

// Create schema class
var Schema = mongoose.Schema;

// Create the Note schema
var NoteSchema = new Schema({
    article_is: {
        type: Schema.Types.ObjectId
    },
    body: {
        type: String
    }
});

// Mongoose will automatically save the objectIDs of notes as reffered in Articles model

// Create Note model with NoteSchema
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;

