import React from "react";
import "../styles/About.css";
import LmDmForm from "./LmDmForm";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const skillsList = [
    {name: "HTML", category: "Frontend"},
    {name: "CSS", category: "Frontend"},
    {name: "Java", category: "Backend"},
    {name: "JavaScript", category: "Backend"},
    {name: "SQL", category: "Backend"},
    {name: "React", category: "Frontend"}
];

function About() {
    const [mode] = useLocalStorage("mode","light");
    const [search, setSearch] = useState("");
    const [frontendCheck, setFrontendCheck] = useState(false);
    const [backendCheck, setBackendCheck] = useState(false);

    const filteringSkills = skillsList.filter(skill => {
        const matches = skill.name.toLowerCase().includes(search.toLowerCase());

        if(!frontendCheck && !backendCheck) {
            return matches;
        }

        return matches && (frontendCheck && skill.category === "Frontend") || (backendCheck && skill.category === "Backend");
    })
    
    return(
        <div className={`about text-center ${mode === "dark" ? "darkMode" : ""}`}>
            <h1>About me</h1>
            <p className="top fw-bold">Lean more about my  educational background, career aspirations, and technical skills</p>

            <div className="section">
                <h2>Education</h2>
                <div className="row g-3">
                    <div className="col-12">
                        <div className={`item p-3 d-inline-block ${mode === "dark" ? "darkItem" : ""}`}>
                            <h3>High School</h3>
                            <p>Grade 12 - West Kings District High</p>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className={`item p-3 d-inline-block ${mode === "dark" ? "darkItem" : ""}`}>
                        <h3>University</h3>
                        <p>Bachelor of Applied Computer Science, year 3/4 - Dalhousie University</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>Career Goals</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className={`item p-3 d-inline-block ${mode === "dark" ? "darkItem" : ""}`}>
                            <h3>Cyber Security</h3>
                            <p>I would like to do something related to cyber security related to website safety.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={`item p-3 d-inline-block ${mode === "dark" ? "darkItem" : ""}`}>
                            <h3>Hardware Technician</h3>
                            <p>I am also interesting in computer hardware components in which I would like to help develop them.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>Technical Skills</h2>

                <input
                    type="text"
                    placeholder="Search For Skills"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="searchBar"
                />

                <form>
                    <div className="checkBoxes">
                        <input
                            type="checkbox"
                            checked={frontendCheck}
                            onChange={() => setFrontendCheck(!frontendCheck)}
                            className="checkBox form-check-input"
                        />
                        <label className="form-check-label">
                            Frontend
                        </label>

                        <input
                            type="checkbox"
                            checked={backendCheck}
                            onChange={() => setBackendCheck(!backendCheck)}
                            className="checkBox form-check-input"
                        />
                        <label className="form-check-label">
                            Backend
                        </label>
                    </div>
                </form>

                <div className="row">
                    {filteringSkills.map((skill, index) =>(
                        <div className="col-md-4" key={index}>
                            <div className={`skill p-2 d-inline-block ${mode === "dark" ? "darkItem" : ""}`}>
                                <h4>{skill.name}</h4>
                            </div>
                        </div>
                    ))}
                    {filteringSkills.length === 0 ? <p className="noneFound">No Skills found.</p> : null}
                </div>
            </div>

            <LmDmForm />
        </div>
    );
}

export default About;