import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"; 

export default function Notloggedin(){
    const user = useSelector((auth) => auth.authInfo.login );
    return  user ? <Navigate to='/'/> : <Outlet/> ;
}