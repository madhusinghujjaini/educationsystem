import React from "react";
import './registration.css';
function Registration() {
    return (
        <form className="reg-form">
            <h3>registration form</h3>
            <div className="container">
                <lable for="name">name</lable>
                <input type="text" placeholder=" name" />
            </div>

            <div className="container">
                <lable for="email" >Email</lable>
                <input type="email" placeholder="email" />
            </div>
            <div className="container">
                <lable for="mobileno">mobileno</lable>
                <input type="number" placeholder="mobile no" />
            </div>
            <div className="container">
                <lable for="password" >password</lable>
                <input type="password" placeholder="password" />
            </div>
        <button>submit</button>
        </form >
    )










}
export default Registration;