const mongoose = require('mongoose')
const Schema = mongoose.Schema

const books = {
    title : {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: "Author", required: true},
    summary: {type: String , required: true},
    isbn: {type:String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: "Genre"}]
}
const BookSchema = new Schema(books)

BookSchema.virtual("url").get(function(){
    return `/catalog/book/${this.id}`;
})

module.exports = mongoose.model("Book",BookSchema)
