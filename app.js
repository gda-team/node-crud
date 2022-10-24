const express = require('express');
const dotenv = require('dotenv');

const routes = require('./routes/contact.routes');

const app = express();

// Use ejs engine

app.set('view engine', 'ejs')


dotenv.config();

app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app listening on Port http://localhost:${PORT}`));
