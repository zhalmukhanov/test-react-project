import React from 'react';
import {Link} from "react-router-dom";
import '../css/main.css'
import {checkInput} from "../hooks/checkInput";



const Login = () => {
    function login() {
        console.log("work")
        const login_email = document.getElementById('email');
        const email_error =  document.getElementById('email_error');

        const login_password = document.getElementById('password');
        const password_error =  document.getElementById('password_error');

        if(checkInput(login_email, email_error) &
            checkInput(login_password, password_error)) {
            document.getElementById("close_log").click();
        }
    }

    return (
        <div>
            <div className="modal_bg" id="loginModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-white p-4 text-dark">
                        <h1><span className="title_start">Lo</span>gin</h1>
                        <div className="form_modal mt-5">
                            <input type="email" id="email" placeholder="Enter your email" />
                                <label htmlFor="email" id="email_error" className="error">Данное поле является
                                    обязательным</label>
                                <input type="password" id="password" placeholder="Confirm a password" className="mt-3" />
                                    <label htmlFor="password" id="password_error" className="error">Данное поле является
                                        обязательным</label>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div>
                                            <input type="checkbox" id="remember" />
                                                <label htmlFor="remember" className="ms-2">Remember me</label>
                                        </div>
                                        <Link to="/">Forget password?</Link>
                                    </div>
                                    <input type="submit" value="Login now" onClick={() => login()}
                                           className="btn mt-5 btn_modal" />
                        </div>
                        <div className="modal_footer mt-3">
                            <p>Alredy have an account? </p>
                            <Link to="/register">Signup now</Link>
                        </div>
                    </div>
                    <Link to="/successfully" id="close_log"></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;