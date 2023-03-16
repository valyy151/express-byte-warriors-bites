const { mongoose, Schema } = require('mongoose');

mongoose
	.connect('mongodb://127.0.0.1:27017/warriors-imdb')
	.then((res) => {
		console.log('Connected to Database:', res.connections[0].name);

		const movieSchema = new Schema({
			title: String,
		});

		const Movie = mongoose.model('Movie', movieSchema);

		Movie.create({ title: 'My Movie' });
	})
	.catch((err) => console.error('Error connecting to Database:', err));
