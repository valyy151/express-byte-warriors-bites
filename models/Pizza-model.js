const { mongoose, Schema } = require('mongoose');

const PizzaSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	ingredients: {
		type: [String],
	},
	image: {
		type: String,
	},

	isVeggie: Boolean,
});

const Pizza = mongoose.model('Pizza', PizzaSchema);
module.exports = Pizza;
