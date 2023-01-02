import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import axios from 'axios';
import UserContext from './context/userContext'
import AdminContext from './context/adminContext';
import './App.css';
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Signup from './components/signup/signup'
import AdminLogin from './components/adminLogin/adminLogin'

import AdminApplication from './pages/applications'
import AdminAllocation from './pages/allocated'
import AdminApproved from './pages/approved'
import AdminBooking from './pages/booking'
import AdminDeclined from './pages/declined'



function App() {
 
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })
  const [adminData, setAdminData] = useState({
    token: undefined,
    user: undefined,
  })
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token')
      if (token === null) {
        localStorage.setItem('auth-token', "")
        token = ""
      }
      const tokenResponse =
        await axios.post('http://localhost:4000/tokenIsValid', null, {
          headers: { "x-auth-token": token }
        })
        console.log(tokenResponse,"response");
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:4000/", {
          headers: { "x-auth-token": token },
        })

        setUserData({
          token,
          user: userRes.data,

        })
      }
    }
    const adminLoggedIn = async () => {
      let token = localStorage.getItem('admin-token')
      if (token === null) {
        localStorage.setItem('admin-token', "")
        token = ""
      }
      const tokenResponse = await
        axios.post('http://localhost:4000/admin/tokenIsValid', null, {
          headers: { "x-admin-token": token }
        })
        console.log("tokenResponse",tokenResponse);
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:4000/admin", {
          headers: { "x-admin-token": token },
        })

        setAdminData({
          token,
          user: userRes.data,

        })
      }
    }
    checkLoggedIn()
    adminLoggedIn()
  }, [])
  return (
    <div className="App">

      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Routes>

            <Route exact path='/' element={<Homepage />}>
            </Route>
            <Route path='/signup' element={<Signup />}>
            </Route>
            <Route path='/login' element={<Login />}>
            </Route>

          </Routes>
        </UserContext.Provider>
        <AdminContext.Provider value={{ adminData, setAdminData }}>
          <Routes>
            
            <Route path='/admin' element={<AdminLogin />}>
            </Route>
            <Route path='/admin/applications' element={<AdminApplication />}>
            </Route>
            <Route path='/admin/approved' element={<AdminApproved />}>
            </Route>
            <Route path='/admin/allocated' element={<AdminAllocation />}>
            </Route>
            <Route path='/admin/booking' element={<AdminBooking />}>
            </Route>
            <Route path='/admin/declined' element={<AdminDeclined />}>
            </Route>
          </Routes>
        </AdminContext.Provider>

      </Router>

    </div>
  );
}

export default App;
