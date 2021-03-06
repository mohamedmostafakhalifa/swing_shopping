var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var wishList = new Schema({
    title: {type: String, default: "The cool WishList"},
    products: [{type: ObjectId, ref: "Product"}]
});

module.exports = mongoose.model('WishList', wishList);