import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import './signup.css'
import axios from 'axios'
import userContext from "../../context/userContext";
import { useForm } from "react-hook-form"


const Signup = () => {
    let { register,
        handleSubmit,
        formState: { errors },

    } = useForm()
    const history = useNavigate()




    const { setUserData } = useContext(userContext)


    useEffect(() => {
        const user = localStorage.getItem('auth-token')
        if (user) {
            history('/')
        } else {
            history('/signup')
        }
    }, [history])


    const onSub = async (data, e) => {
        e.preventDefault();

        console.log(data);
        const datas = ({
            fullname: data.fullname,
            username: data.username,
            email: data.email,
            password: data.password
        })
        console.log(datas.fullname, "sdfghj");

        const { fullname, username, email, password } = datas
        if (fullname && username && email && password) {

            await axios.post('http://localhost:4000/signup', datas)
            const loginResponse = await axios.post('http://localhost:4000/login', {
                email, password
            })
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            })
            localStorage.setItem("auth-token", loginResponse.data.token)
            history('/')
        }



    }



    return (
        <div className='h-screen flex bg-blue-900'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>

                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    SignUp
                </h1>

                <form onSubmit={handleSubmit(onSub)}>



                    <div>
                        <label htmlFor='fullname'>Full Name</label>
                        <input
                            type='string'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}

                            placeholder='Your Full Name'
                            // name="fullname"
                            // value={user.fullname}
                            // onChange={handleChange}
                            {...register("fullname", { required: "Full Name is required",
                            pattern: {
                                value: /[!0-9@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/,
                                message: "Invalid Full Name"
                            } })}
                        />
                        {errors.fullname && (
                            <span className="text-red-600">{errors.fullname.message}</span>
                        )}
                    </div>
                    <div>
                        <label htmlFor='username'>User Name</label>
                        <input
                            type='string'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}

                            placeholder='Your User Name'
                            // name="username"
                            // value={user.username}
                            // onChange={handleChange}
                            {...register("username", { required: "Username is required",
                            pattern: {
                                value: /[!0-9@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/,
                                message: "Invalid User Name"
                            } 
                         })}

                        />
                        {errors.username && (
                            <span className="text-red-600">{errors.username.message}</span>
                        )}

                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}

                            placeholder='Your Email'
                            // name="email"
                            // value={user.email}
                            // onChange={handleChange}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                }
                            })}

                        />
                        {errors.email && (
                            <span className="text-red-600">{errors.email.message}</span>
                        )}

                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}

                            placeholder='Your Password'
                            // name="password"
                            // value={user.password}
                            // onChange={handleChange}
                            {...register("password", { required: "Password is required" })}


                        />
                        {errors.password && (
                            <span className="text-red-600">{errors.password.message}</span>
                        )}

                    </div>
                    <div className="flex"><p >Already have an account?</p><p onClick={(e) => {
                        history('/login')
                    }} className="text-blue-900 cursor-pointer">Login</p></div>

                    <div className='flex justify-center items-center mt-6'>
                        <button type="submit"
                            className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        // onClick={
                        //     handleSubmit(onSub)
                        // }
                        >
                            Signup
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};
export default Signup