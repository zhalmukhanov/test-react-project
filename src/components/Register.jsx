import React from 'react';
import {Link} from "react-router-dom";
import '../css/main.css'
import {checkInput} from "../hooks/checkInput";

const Register = () => {
    function registration() {
        const reg_name = document.getElementById('name');
        const name_error =  document.getElementById('name_error');

        const reg_email = document.getElementById('reg_email');
        const reg_email_error =  document.getElementById('reg_email_error');

        const password1 = document.getElementById('password1');
        const password1_error =  document.getElementById('password1_error');

        const password2 = document.getElementById('password2');
        const password2_error =  document.getElementById('password2_error');
        if(checkInput(reg_name, name_error) &
            checkInput(reg_email,reg_email_error) &
            checkInput(password1, password1_error) &
            checkInput(password2, password2_error))
            document.getElementById("close_reg").click();
    }
    return (
        <div>


            <div className="modal_bg" id="registrModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-white p-4 text-dark">
                        <h1><span className="title_start">Re</span>gistration</h1>

                        <div className="form_modal mt-5">
                            <input type="text" id="name" placeholder="Enter your name" />
                                <label htmlFor="name" id="name_error" className="error">Данное поле является
                                    обязательным</label>
                                <input type="email" id="reg_email" placeholder="Enter your email" className="mt-3" />
                                    <label htmlFor="email" id="reg_email_error" className="error">Данное поле является
                                        обязательным</label>
                                    <input type="password" id="password1" placeholder="Confirm a password"
                                           className="mt-3" />
                                        <label htmlFor="password" id="password1_error" className="error">Данное поле
                                            является обязательным</label>
                                        <input type="password" id="password2" placeholder="Confirm a password"
                                               className="mt-3" />
                                            <label htmlFor="password" id="password2_error" className="error">Данное поле
                                                является обязательным</label>
                                            <div className="d-flex justify-content-between mt-3">
                                                <div>
                                                    <input type="checkbox" id="accept" />
                                                        <label htmlFor="accept" className="ms-2">I accept all term & conditions</label>
                                                </div>
                                            </div>
                                            <input type="submit" value="Register Now" onClick={() => registration()}
                                                   className="btn mt-5 btn_modal"/>
                        </div>
                        <div className="modal_footer mt-3">
                            <p>Don't have an account? </p>
                            <Link to="/login">Login now</Link>
                        </div>
                    </div>
                    <Link to="/successfully" id="close_reg"></Link>
                </div>
            </div>
        </div>
    );
};

export default Register;