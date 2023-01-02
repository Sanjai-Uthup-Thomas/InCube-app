import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/adminSidebar/adminSidebar";
import Applic from "../components/applications/applications";




function Applications() {
    const history = useNavigate()
    useEffect(()=>{
        const user =localStorage.getItem('admin-token')
        if(user){
            history('/admin/applications')
        }else{
            history('/admin')
        }
    },[history])
   
    return (
    <div className="flex">
    <Sidebar />
        <Applic/>
        
    
    
    </div>
    
    );
}
export default Applications;