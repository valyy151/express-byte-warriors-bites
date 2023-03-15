const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

const pizzas = [
	{ title: 'Margarita', price: '€10', image: '../images/margarita.jpg' },
	{ title: 'Veggie', price: '€12', image: '../images/veggie.jpg' },
	{ title: 'Seafood', price: '€15', image: '../images/seafood.jpg' },
];

const [margarita, veggie, seafood] = pizzas;

app.get('/', (req, res) => res.sendFile(__dirname + '/views/home.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/views/contact.html'));
app.get('/pizzas', (req, res) => res.sendFile(__dirname + '/views/pizzas.html'));
app.get('/pizzas/margarita', (req, res) => res.render('product', margarita));
app.get('/pizzas/veggie', (req, res) => res.render('product', veggie));
app.get('/pizzas/seafood', (req, res) => res.render('product', seafood));

app.listen(3000, () => console.log('Server started successfuly on port 3000'));
