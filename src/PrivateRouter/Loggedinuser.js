import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/auth/login";

export default function Loggedin(){
    const user = useSelector((auth) => auth.authInfo.login );
    return  user ? <Outlet/> : <Login /> ;
}