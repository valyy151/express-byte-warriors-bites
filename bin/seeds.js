const mongoose = require('mongoose');
const Pizza = require('../models/Pizza-model.js');

mongoose
	.connect('mongodb://127.0.0.1/warriors-bites')
	.then((x) => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

		return Pizza.deleteMany({});
	})
	.then((response) => {
		console.log(response);

		const pizzas = [
			{
				price: 10,
				name: 'Margarita',
				image: '../images/margarita.jpg',
				ingredients: ['Mozzarella', 'Tomato-sauce', 'Basilicum'],
				isVeggie: false,
			},
			{
				price: 12,
				name: 'Veggie',
				image: '../images/veggie.jpg',
				ingredients: ['Mozzarella', 'Tomatoes', 'Cucumbers'],
				isVeggie: true,
			},
			{
				price: 17,
				name: 'Seafood',
				image: '../images/seafood.jpg',
				ingredients: ['Mozzarella', 'Tomato-sauce', 'Shrimp'],
				isVeggie: false,
			},
		];

		return Pizza.insertMany(pizzas);
	})
	.then((res) => {
		//chef, our pizzas were created :)
		console.log('Number of pizzas created: ', res.length);

		// Once created, close the DB connection
		mongoose.connection.close();
	})
	.catch((err) => console.error('Error... ', err));
