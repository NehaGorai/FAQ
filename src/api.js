const express = require('express');
const cors = require('cors');
const app = express();
const carData = require('./data/car.json');
const faqData = require('./data/faq_data.json')
const PORT = 4400;


app.use(cors());

app.get("/cardata", function (req, res) {
    res.json(carData); //cars related data http://localhost:4400/cardata
});
app.get("/faqdata", function (req, res) {
    // console.log("FAQ Data Received"); // Debug log
    // console.log(faqData); // Log the data
    res.json(faqData); //http://localhost:4400/faqdata
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Your API is running on port ${PORT}`);
    }
});
