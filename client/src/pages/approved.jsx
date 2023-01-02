import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/adminSidebar/adminSidebar";
import Approv from "../components/approved/approved";




function Approved() {
    const history = useNavigate()
    useEffect(()=>{
        const user =localStorage.getItem('admin-token')
        if(user){
            history('/admin/approved')
        }else{
            history('/admin')
        }
    },[history])
   
    return (
    <div className="flex">
    <Sidebar/>
    <Approv/>
    </div>
    
    );
}
export default Approved;