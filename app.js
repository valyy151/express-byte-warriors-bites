const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const Pizza = require('./models/Pizza-model');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');

mongoose
	.connect('mongodb://127.0.0.1/warriors-bites')
	.then((res) => console.log('Connected to Database:', res.connections[0].name))
	.catch((err) => console.log('Error connecting to Database:', err));

app.get('/', (req, res) => res.render('home'));

app.get('/pizzas', (req, res) => res.render('pizzas'));

app.get('/contact', (req, res) => res.render('contact'));

app.get('/pizzas/veggie', (req, res) =>
	Pizza.findOne({ name: 'Veggie' })
		.then((veggie) => {
			console.log(veggie);
			return res.render('product', veggie);
		})
		.catch((err) => console.log(err)),
);

app.get('/pizzas/seafood', (req, res) =>
	Pizza.findOne({ name: 'Seafood' })
		.then((seafood) => {
			return res.render('product', seafood);
		})
		.catch((err) => console.log(err)),
);

app.get('/pizzas/margarita', (req, res) =>
	Pizza.findOne({ name: 'Margarita' })
		.then((margarita) => {
			return res.render('product', margarita);
		})
		.catch((err) => console.log(err)),
);

app.listen(3000, () => console.log('Server started successfuly on port 3000'));
