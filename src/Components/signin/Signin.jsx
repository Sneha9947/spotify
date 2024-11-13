import React from 'react';
import "./signin.css";
import axios, { Axios } from 'axios';

const Signin = () => {
  

    return (
    <>
    <div className='signin-container'>
        <div className='signin-form'>
            <h1>Sign in to Spotify</h1>
            <form>
                <label for="email">Email adress:</label>
                <input type="email" id='email' placeholder='Enter your email'/>
                <label for="password">Password:</label>
                <input type="password" id='password' placeholder='Enter your password'/>
                    <button type="submit">Sign in</button>
                    <p id='error-message'></p>
            </form>
        </div>
    </div>

    </>
  )
}

export default Signin