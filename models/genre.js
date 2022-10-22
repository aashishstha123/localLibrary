const mongoose = require('mongoose')
const Schema = mongoose.Schema

const book = {
    name: {type: String, required: true, minlength: 3 , maxlength: 100}
}

const genreSchema = new Schema(book)

genreSchema.virtual('url').get(function(){
    return `/catalog/genre/${this._id}`
})
module.exports = mongoose.model("Genre",genreSchema)