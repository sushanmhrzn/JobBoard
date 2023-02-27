import React from "react";
import '../css/signUp.css';
import axios from "axios";
import { useState } from "react";



const SignUp =()=>{
 const[username,setUsername]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');
 const[sector,setSector]=useState('');
 const[cv,setCv]=useState('');
 const[created,setCreated]=useState('');
 const[phonenumber,setPhone]=useState('');

 async function submit(e){
    e.preventDefault();
     await axios.post("http://localhost:3001/signup",{username,email,password,sector,cv,created,phonenumber});
    }
    
    return (
        <div className="SignUpPage">
            <h1>Sign Up</h1>
            <div>
            <form className="formDetails" action="POST">
            <label>Username<input type='text' onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'></input></label>
            <label>Email<input type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'></input></label>
            <label>Password<input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'></input></label>
            <label>Sector
                <select name='Sector'onChange={(e)=>{setSector(e.target.value)}}>
                <option value='Marketing'>Marketing</option>
                <option value='Finance & Accounting'>Finance & Accounting</option>
                <option value='IT'>IT</option>
                <option value='Teaching'>Teaching</option>
                </select>
            </label>
            <label>CV Upload<input type='file' onChange={(e)=>{setCv(e.target.value)}} placeholder='CV_Upload'></input></label>
            <label>Created At<input type='text' onChange={(e)=>{setCreated(e.target.value)}} placeholder='Created_At'></input></label>
            <label>Phone<input type='text' onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone'></input></label>
            <input type="submit" onClick={submit}></input>
            </form>
            </div>
        </div>
        
    )
}

export default SignUp;