const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");

const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args));

dotenv.config();
const app = express();
const router = express.Router();

const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=halifax,ca&&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

router.get('*', async (req, res) => {
fetch(weatherAPI)
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.error('error:' + err));
try {
    let response = await fetch(weatherAPI);
    response = await response.json();

    // Extract required fields
    const weatherData = {
        city: response.name,
        country: response.sys.country,
        temperature: {
            current: response.main.temp,
            feels_like: response.main.feels_like,
            min: response.main.temp_min,
            max: response.main.temp_max,
        },
        wind: {
            speed: response.wind.speed,
            direction: response.wind.deg
        },
        humidity: response.main.humidity
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