const express = require('express');
require('dotenv').config();
const booksRoutes = require('./routes/booksRoute.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/books', booksRoutes);

app.listen(port, () => {
    console.log(` Server berjalan di http://localhost:${port}`);
});