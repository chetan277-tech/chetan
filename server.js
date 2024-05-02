const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);

    const bmi = weight / (height * height);
    res.send('Your BMI is: ' + bmi.toFixed(2));
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});