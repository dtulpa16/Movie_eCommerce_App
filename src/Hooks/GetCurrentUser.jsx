import React, { useState, useEffect } from 'react';
import axios from 'axios';


// this hook gets the current user info
const GetCurrentUser = (localStorage) => {
    const [user, setUser] = useState({});

    const jwt = localStorage.getItem('token');

    async function getUser() {
        const response = await axios.get('https://localhost:44394/api/users', { headers: {Authorization: 'Bearer ' + jwt}});

        if (response.data) {
            setUser(response.data);
        }
        else {
            console.log("bad call");
        }
    }

    useEffect(() => {
        getUser(localStorage)
    },)

    return {user};
}

export default GetCurrentUser;