const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use((req, res, next) => res.send('hello world'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app listening on Port http://localhost:${PORT}`));
