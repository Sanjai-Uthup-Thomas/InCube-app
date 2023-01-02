import React, { useState, useContext,useEffect } from "react";
import axios from "axios";
import UserContext from "../../context/userContext";
import './login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const history = useNavigate()
    useEffect(()=>{
        const token =localStorage.getItem('auth-token')
        if(token){
            history('/')
        }else{
            history('/login')
        }
    },[history])
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const { setUserData } = useContext(UserContext)
    const handleChange =  (e) => {
        try {
            const loginUser = { email, password }
            if(loginUser.email || loginUser.password){
             axios.post('http://localhost:4000/login', loginUser).then((loginResponse => {
                console.log(loginResponse.data.msg);
                setSuccess(loginResponse.data.msg)
                console.log("Success",success);
                
                if(loginResponse.data.msg===undefined){
                    setUserData({
                        token: loginResponse.data.token,
                        user: loginResponse.data.user
                    })
                    localStorage.setItem('auth-token', loginResponse.data.token)
                    history('/')
                }
             
             }))
               
            }else{
                setError(true)
                console.log("error: " + error);
            }
          
        } catch (err) {
            error.response.data.msg && setError(err.response.data.msg)
            console.log(error,"error");
        }
    }
    return (
        <div className='h-screen flex bg-blue-900'>

            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>
                {error &&<p className="text-red-600">Enter Email and password</p>}
                <p className="text-red-600">{success}</p>

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
                <div className="flex"><p>Don't have an account yet? </p>
                <p onClick={(e)=>{
                    history('/signup')
                }} className="text-blue-900 cursor-pointer">Signup</p></div>
                


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
    );
};

export default Login