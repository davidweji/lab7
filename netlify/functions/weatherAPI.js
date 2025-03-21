const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");

const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args));

dotenv.config();
const app = express();
const router = express.Router();

router.get('*', async (req, res) => {
try {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=halifax,ca&&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(weatherAPI);
    const data = await response.json();

    // Extract required fields
    const weatherData = {
        city: data.name,
        country: data.sys.country,
        temperature: {
            current: data.main.temp,
            feels_like: data.main.feels_like,
            min: data.main.temp_min,
            max: data.main.temp_max,
        },
        wind: {
            speed: data.wind.speed,
            direction: data.wind.deg
        },
        humidity: data.main.humidity
    };

    res.status(200).json(weatherData);
} catch (err) {
    console.log(err);
    res.status(500).json({msg: `Internal Server Error.`});
}
});

app.use('/', router);

module.exports = app;
module.exports.handler = serverless(app);