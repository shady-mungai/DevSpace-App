import React from "react";
import { useNavigate,Outlet } from "react-router-dom";

let userId = localStorage.getItem('id')
const PrivateRoutes = () => {
const navigate = useNavigate()
    return (
        <>
            {userId !== null?<Outlet />: navigate('/Login')}
            
        </>
    );
}
 
export default PrivateRoutes;