import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Home from "./pages/main_pages/home";
import Loggedin from "./PrivateRouter/Loggedinuser";
import Notloggedin from "./PrivateRouter/Notloggedinuser";
import ForgotPassword from "./pages/auth/forgotPassword";
import Layout from "./layouts/layout"; 

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements( 
      <Route>
        <Route element={<Loggedin/>}>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}> </Route> 
          </Route>
        </Route>
        <Route element={<Notloggedin/>}>
          <Route path='/register' element={<Register/>}> </Route>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}> </Route>
        </Route>
      </Route>
    )
  );
  return (
     <>
      <RouterProvider router={route}></RouterProvider>
     </>
  );
}

export default App;
