const express = require('express');
const cors = require('cors');
const app = express();
const carData = require('./data/featureTwo.json');
const PORT = 4400;

app.use(cors());

app.get("/cardata", function (req, res) {
    res.json(carData);
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Your API is running on port ${PORT}`);
    }
});
