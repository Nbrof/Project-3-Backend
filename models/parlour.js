const mongoose = require('../db/connection');
// const mongoose = require("mongoose");


// const Schema = mongoose.Schema;
const model = mongoose.model;

const parlourSchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    rating: String,
	products: [
        {
            ref: 'Product',
            type: mongoose.Schema.Types.ObjectId,
        },
],
});

const Parlour = model("Parlour", parlourSchema);

module.exports = Parlour