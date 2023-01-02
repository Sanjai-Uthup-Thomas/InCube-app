import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './homepage.css'
import Navbar from "../../pages/nav";
import ApplicationForm from "../../pages/applicationForm";
import axios from "axios";


const Homepage = () => {
    const [login,setLogin] =useState(false)
    const history = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('auth-token')
        axios.post('http://localhost:4000/tokenIsValid', null, {
            headers: { "x-auth-token": token }
        }).then((response) => {
            console.log(response,"userresponse");
            if (response) {
                history('/')
                setLogin(true)
            }

        })

    }, [history])
    return (
        <div><Navbar />
        {login?<ApplicationForm />:""}
            
        </div>
    )
}
export default Homepage