import React, { Component } from "react";
import { Link } from "react-router-dom";


function NotFound() {
    return (
        <div className="notfound-container">
            <h1 className="notfound-header">404 Error: Page Not Found</h1>
            <button className="notfound-btn"><Link to="./">Go Back Home</Link></button>
        </div>
    )
}

export default NotFound
