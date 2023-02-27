import React from "react";
import '../css/signUp.css';
const SignUp=()=>{
    return (
        <div className="SignUpPage">
            <h1>Sign Up</h1>
            <div>
            <form className="formDetails">
            <label>Username<input type='text' name='Username'></input></label>
            <label>Email<input type='text' name='Email'></input></label>
            <label>Password<input type='password' name='Password'></input></label>
            <label>Sector
                <select name='Sector'>
                <option value='Marketing'>Marketing</option>
                <option value='Finance & Accounting'>Finance & Accounting</option>
                <option value='IT'>IT</option>
                <option value='Teaching'>Teaching</option>
                </select>
            </label>
            <label>CV Upload<input type='file' name='CV_Upload'></input></label>
            <label>Created At<input type='text' name='Created_At'></input></label>
            <label>Phone<input type='text' name='Phone'></input></label>
            </form>
            </div>
        </div>
        
    )
}

export default SignUp;