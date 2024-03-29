require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const Database = require('./config/databaseConnection');
new Database();
const app = express();
const PORT = process.env.PORT || 3000;
const limiter = require('./middleware/rateLimiter');

app.use(cors());
app.use(limiter);
app.use(bodyParser.json());
app.use('/api',api);

app.get('/', (req, res) => {
    res.status(200).send('Server Ack.');
});

app.listen(PORT, () => {
    console.log(`Server up... http://127.0.0.1:${PORT}`);
});