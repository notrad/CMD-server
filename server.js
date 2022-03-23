const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const api = require('./routes/api');
const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use('/api',api);

app.get('/', (req, res) => {
    res.status(200).send('Server Ack.');
});

app.listen(PORT, () => {
    console.log(`Server up... http://127.0.0.1:${PORT}`);
});