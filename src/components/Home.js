import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import me from "../assets/Me.jpg";
import LmDmForm from "./LmDmForm";
import { useLocalStorage } from "./useLocalStorage";


function Home() {
    const [mode] = useLocalStorage("mode","light");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch("/.netlify/functions/weatherAPI").then((res) => res.json()).then((data) => setWeather(data)).catch((err) => {
            console.log("Failed to fetch weather:", err);
            setError("Failed to load weather.");
        });
    }, []);

    return (
        <div className={`home text-center fw-bold ${mode === "dark" ? "darkMode" : ""}`}>
            <h1 className="h1">David's Portfolio</h1>
            <p>My name is David, and I am a 3rd year applied computer science student at Dalhousie University.</p>
            <p>I hope you enjoy my portfolio site, visit "About" to learn more about me!</p>

            <img src={me} alt="me - David W." className="img-of-me" />
            <p>This is me</p>

            <div className="mt-4">
                <h3>Weather</h3>
                {error && <p>{error}</p>}
                {weather ? (
                    <div className="weatherData">
                        <p>City: {weather.city}, {weather.country}</p>
                        <p>Temperature: {weather.temperature.current} C  |  Feels like: {weather.temperature.feels_like} C</p>
                    </div>
                ) : !error && <p>loading weather...</p>}
            </div>

            <LmDmForm />
        </div>
    );
}

export default Home;