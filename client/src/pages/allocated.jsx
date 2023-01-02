import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/adminSidebar/adminSidebar";
import Allo from "../components/allocated/allocated";




function Allocated() {
    const history = useNavigate()
    useEffect(()=>{
        const user =localStorage.getItem('admin-token')
        if(user){
            history('/admin/allocated')
        }else{
            history('/admin')
        }
    },[history])
   
    return (
    <div className="flex">
    <Sidebar/>
    <Allo/>
    </div>
    
    );
}
export default Allocated;