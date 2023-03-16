const { mongoose } = require('mongoose');
const Movie = require('./models/Movie-model');

mongoose
	.connect('mongodb://127.0.0.1:27017/warriors-imdb')
	.then(async (res) => {
		console.log('Connected to Database:', res.connections[0].name);

		const result = await Movie.findOne({
			genre: 'History',
		});

		console.log('Movie created successfuly:', result);
	})

	.catch((err) => console.error('Error connecting to Database:', err.message));
