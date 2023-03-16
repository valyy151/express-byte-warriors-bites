const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');

const pizzas = [
	{
		price: '€10',
		title: 'Margarita',
		image: '/images/margarita.jpg',
		ingredients: ['Mozzarella', 'Tomato-sauce', 'Basilicum'],
	},
	{
		price: '€12',
		title: 'Veggie',
		image: '/images/veggie.jpg',
	},
	{
		price: '€15',
		title: 'Seafood',
		image: '/images/seafood.jpg',
	},
];

const { data } = pizzas;

const [margarita, veggie, seafood] = pizzas;

app.get('/', (req, res) => res.render('home'));
app.get('/pizzas', (req, res) => res.render('pizzas', data));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/pizzas/veggie', (req, res) => res.render('product', veggie));
app.get('/pizzas/seafood', (req, res) => res.render('product', seafood));
app.get('/pizzas/margarita', (req, res) => res.render('product', margarita));

app.listen(3000, () => console.log('Server started successfuly on port 3000'));
