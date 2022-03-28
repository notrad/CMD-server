require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const app = express()

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json())
app.use('/api',api);

app.get('/', (req, res) => {
    res.status(200).send('Server Ack.');
});

app.listen(PORT, () => {
    console.log(`Server up... http://127.0.0.1:${PORT}`);
});