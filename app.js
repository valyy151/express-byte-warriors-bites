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

app.get('/pizzas/:pizzaName', (req, res) => {
	Pizza.findOne({ name: req.params.pizzaName })
		.then((pizzaObject) => {
			res.render('product', pizzaObject);
		})
		.catch((err) => console.log(err));
});

app.get('/contact', (req, res) => res.render('contact'));

app.listen(3000, () => console.log('Server started successfuly on port 3000'));
