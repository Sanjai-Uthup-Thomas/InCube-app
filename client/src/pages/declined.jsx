import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/adminSidebar/adminSidebar";
import Declin from "../components/declined/declined";




function Declined() {
    const history = useNavigate()
    useEffect(()=>{
        const user =localStorage.getItem('admin-token')
        if(user){
            history('/admin/declined')
        }else{
            history('/admin')
        }
    },[history])
    return (
    <div className="flex">
    <Sidebar/>
        <Declin/>
</div>
    
    );
}
export default Declined;