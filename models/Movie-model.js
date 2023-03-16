const { mongoose, Schema } = require('mongoose');

const movieSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	rating: {
		type: Number,
		required: true,
	},
	isLong: {
		type: Boolean,
		required: true,
	},
	genre: {
		type: String,
		required: true,
		enum: ['Action', 'Drama', 'Comedy'],
	},
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
