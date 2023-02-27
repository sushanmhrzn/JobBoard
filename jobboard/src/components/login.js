import React from "react";
import '../css/login.css';
import axios from "axios";
import { useState } from "react";

const Login =() => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e){
        e.preventDefault();
        await axios.post("http://localhost:3001/login",{username, password});
    }

    return(
        <div className="LoginPage">
            <h1>Login Page</h1>
            <div>
                <form className="loginDetails" action="POST">
                    <label>
                        Username: <input type='text' onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username' />
                    </label>
                    <label>
                        Password: <input type='text' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
                    </label>
                    <input type="submit" onClick={submit}/>
                </form>
            </div>
        </div>
    )
}
export default Login;