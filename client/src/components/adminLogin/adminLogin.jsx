import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import adminContext from '../../context/adminContext';
import './adminLogin.css'
import { useNavigate } from "react-router-dom"


const AdminLogin = () => {
    const history = useNavigate()
    useEffect(() => {
        const user = localStorage.getItem('admin-token')
        if (user) {
            history('/admin/applications')
        } else {
            history('/admin')
        }
    }, [history])
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const { setAdminData } = useContext(adminContext)
    const handleChange =  (e) => {
        try {
            
            const loginUser = { email, password }

            axios.post('http://localhost:4000/admin/adminlogin', loginUser).then((loginResponse)=>{
                console.log(loginResponse,"loginResponse");
                console.log("loginResponse msg");
                console.log(loginResponse.data.msg);

                setAdminData({
                    token: loginResponse.data.token,
                    user: loginResponse.data.user
                })
                if(loginResponse.data.msg===undefined){
                    localStorage.setItem('admin-token', loginResponse.data.token)
                history('/admin/applications')
                }
                setErrorMessage(loginResponse.data.msg)
                
            })
            
        } catch (err) {
            error.res.data.msg && setError(err.res.data.msg)
        }
    }
    return (
        <div className='h-screen flex bg-blue-900'>

            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Admin Login
                </h1>
                <p className='text-red-600'>{errorMessage}</p>

                <div>
        
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='email'
                        placeholder='Your Email'
                        name="email"
                        value={email}
                        onChange={e =>
                            setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='password'
                        placeholder='Your Password'
                        name="password"
                        value={password}
                        onChange={e =>
                            setPassword(e.target.value)}
                    />
                </div>


                <div className='flex justify-center items-center mt-6'>
                    <button
                        onClick={handleChange}
                        className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                    >
                        Login
                    </button>

                </div>
            </div>
        </div>
    )
}
export default AdminLogin