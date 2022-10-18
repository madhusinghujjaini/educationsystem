import React from "react";
import { useState } from "react";
import './registration.css';
function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:7000/api/user/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, mobile: mobile, password: password})
        })
            .then(res => res.json())
            .then(
                (result) => {
                    alert(result.message)
                })
        alert(`The name you entered was: ${name} ${email} ${mobile}`)
    }


    return (
        <form className="reg-form" onSubmit={handleSubmit}>
            <h3>registration form</h3>
            <div className="container">
                <lable for="name">name</lable>
                <input type="text" placeholder=" name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="container">
                <lable for="email" >Email</lable>
                <input type="email" placeholder="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="container">
                <lable for="mobileno">mobileno</lable>
                <input type="number" placeholder="mobile no" value={mobile}
                    onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="container">
                <lable for="password" >password</lable>
                <input type="password" placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type='submit' />        </form >
    )










}
export default Registration;