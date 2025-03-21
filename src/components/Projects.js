import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import LmDmForm from "./LmDmForm";
import { useLocalStorage } from "./useLocalStorage";

function Projects() {
    const [mode] = useLocalStorage("mode","light");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/.netlify/functions/projectsAPI").then(res => res.json()).then(data => setProjects(data)).catch(err => {
            console.log("Failed to fetch projects: ", err);
        });
    }, []);

    return(
        <div className={`projects text-center ${mode === "dark" ? "darkMode" : ""}`}>
            <h1>My Projects</h1>
            <p className="top fw-bold">Some projects I have worked on in the past, and a current one I am working on.</p>

            <div className="my-5">
                <h2>Recent Projects</h2>
                <div className="row">
                    {projects.map(project => (
                        <div className="col-md-4" key={project.id}>
                            <div className="card">
                                <div className={`card-body ${mode === "dark" ? "darkItem" : ""}`}>
                                    <h3 className="card-title">{project.name}</h3>
                                    <p>Author: {project.author}</p>
                                    <p>Languages: {project.languages.join(", ")}</p>
                                    <p>Description: {project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <LmDmForm />
        </div>
    );
}

export default Projects;