const express = require('express');
const app = express();

const hbs = require('hbs');
const Pizza = require('./models/Pizza-model');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');

const mongoose = require('mongoose');

mongoose
	.connect('mongodb://127.0.0.1/warriors-bites')
	.then((res) => console.log('Connected to Database:', res.connections[0].name))
	.catch((err) => console.log('Error connecting to Database:', err));

app.get('/', (req, res) => res.render('home'));

app.get('/pizzas', (req, res) => {
	Pizza.find()
		.then((pizzaArray) => {
			res.render('product-list', { pizzaArray });
		})
		.catch((err) => console.log(err));
});

app.get('/pizzas/:pizzaName', (req, res) => {
	Pizza.findOne({ name: req.params.pizzaName })
		.then((pizzaArray) => {
			res.render('product', pizzaArray);
		})
		.catch((err) => console.log(err));
});

app.get('/contact', (req, res) => res.render('contact'));

app.listen(3000, () => console.log('Server started successfuly on port 3000'));
