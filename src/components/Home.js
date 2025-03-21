import React from "react";
import "../styles/Home.css";
import me from "../assets/Me.jpg";
import LmDmForm from "./LmDmForm";
import { useLocalStorage } from "./useLocalStorage";


function Home() {
    const [mode] = useLocalStorage("mode","light");

    return (
        <div className={`home text-center fw-bold ${mode === "dark" ? "darkMode" : ""}`}>
            <h1 className="h1">David's Portfolio</h1>
            <p>My name is David, and I am a 3rd year applied computer science student at Dalhousie University.</p>
            <p>I hope you enjoy my portfolio site, visit "About" to learn more about me!</p>

            <img src={me} alt="Picture of me - David W." className="img-of-me" />
            <p>This is me</p>

            <LmDmForm />
        </div>
    );
}

export default Home;