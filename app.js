const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/home.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/views/contact.html'));
app.get('/pizzas', (req, res) => res.sendFile(__dirname + '/views/pizzas.html'));
app.get('/pizzas/margarita', (req, res) => res.sendFile(__dirname + '/views/margarita.html'));
app.get('/pizzas/veggie', (req, res) => res.sendFile(__dirname + '/views/veggie.html'));
app.get('/pizzas/seafood', (req, res) => res.sendFile(__dirname + '/views/seafood.html'));

app.listen(3000, () => console.log('Listening to port 3000'));
