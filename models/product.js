const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: String,

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
