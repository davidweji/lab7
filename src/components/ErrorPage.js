import React from "react";
import "../styles/ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
    return(
        <div className="container text-center">
            <h1 className="error">Error 404. Page not found.</h1>
            <p className="error2">It seems like this page doesn't exist... go back home.</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
    );
}

export default ErrorPage;