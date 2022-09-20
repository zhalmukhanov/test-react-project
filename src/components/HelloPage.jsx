import React from 'react';
import {Link} from "react-router-dom";
import '../css/main.css'
const HelloPage = () => {
    return (
        <div className="hello_body">
            <h1>Hello!</h1>
            <div>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-secondary ms-1">Register</Link>
            </div>
        </div>
    );
};

export default HelloPage;