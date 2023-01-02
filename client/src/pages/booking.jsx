import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/adminSidebar/adminSidebar";
import Book from "../components/booking/booking";




function Booking() {
    const history = useNavigate()
    useEffect(()=>{
        const user =localStorage.getItem('admin-token')
        if(user){
            history('/admin/booking')
        }else{
            history('/admin')
        }
    },[history])
   
    return (
    <div className="flex">
    <Sidebar/>
    <Book/>
</div>
    
    );
}
export default Booking;