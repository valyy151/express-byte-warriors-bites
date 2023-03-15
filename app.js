const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

const pizzas = [
	{
		title: 'Margarita',
		price: '€10',
		image: '/images/margarita.jpg',
		ingredients: ['Mozzarella', 'Tomato-sauce', 'Basilicum'],
	},
	{ title: 'Veggie', price: '€12', image: '/images/veggie.jpg' },
	{ title: 'Seafood', price: '€15', image: '/images/seafood.jpg' },
];

const [margarita, veggie, seafood] = pizzas;

app.get('/', (req, res) => res.render('home'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/pizzas', (req, res) => res.render('pizzas'));
app.get('/pizzas/margarita', (req, res) => res.render('product', margarita));
app.get('/pizzas/veggie', (req, res) => res.render('product', veggie));
app.get('/pizzas/seafood', (req, res) => res.render('product', seafood));

app.listen(3000, () => console.log('Server started successfuly on port 3000'));
