import React from "react";
import './login.css'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:7000/api/user/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password})
        })
            .then(res => res.json())
            .then(
                (result) => {
                    alert(result.message)
                })
        alert(`The name you entered was:  ${email} ${password}`)
    }

    
    return (
        <form  onSubmit={handleSubmit}>
            <h3>Login Here</h3>
            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" 
              onChange={(e) => setEmail(e.target.value)}/>

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password"  
            onChange={(e) => setPassword(e.target.value)}  />
            <button>Log In</button>
            <button>sinup</button>

        </form>
    )


}

export default Login;