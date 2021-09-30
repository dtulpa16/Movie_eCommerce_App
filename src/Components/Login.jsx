import axios from 'axios';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';


// this component gets the user login credentials and makes a post request
const Login = () => {
    // form variables
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const user = {};

    // stores user input in post request format and send back to login page
    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(username,password)
        setUserName('');
        setPassword('');
    }

    async function loginUser(login,pass){
      let payload = {username: login, password:pass}
      let response = await axios.post(`https://localhost:44394/api/authentication/login`, payload)
      console.log(response.data)
    }

  
    // login form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(event) => setUserName(event.target.value)} />

                <input name="password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />

                <input type="submit" value="Login" class="btn btn-primary" />
            </form>
        </div>
    )
}


export default Login ;