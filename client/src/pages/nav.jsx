import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import userContext from "../context/userContext"




function Nav() {
    const { userData, setUserData } = useContext(userContext)
    const history = useNavigate()
    const login = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem('auth-token', "")
        history('/login')
    }
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem('auth-token', "")
        history('/login')

    }
    return (
        <div className="bg-blue-900 whitespace-normal h-20 text-gray-400 flex justify-between">
            <div className=" p-2 mr-10">
                <h1 className=" mt-4 font-extrabold text-3xl">IncuBe</h1>
            </div>
            <div className=" p-2 pt-7 mr-10 flex">
                {console.log(userData.user)}
                {userData.user ? <h3 className="p-3 ">Welcome {userData.user.username}</h3> : ""}

                {userData.user ? (<button className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green-400 focus:outline-none focus:border-gray-900`} onClick={logout}>Logout</button>) :
                    (<>
                        <button className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green-400 focus:outline-none focus:border-green-900`} onClick={login}>Login</button>
                    </>)}
            </div>

        </div>
    );
}
export default Nav;