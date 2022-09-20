import React from 'react';
import {Link} from "react-router-dom";

const SuccessfullyPage = () => {
    return (
        <div className="hello_body">
            <h1>Successfully!</h1>
            <div>
                <Link to="/" className="btn btn-primary">Main Page</Link>
            </div>
        </div>
    );
};

export default SuccessfullyPage;