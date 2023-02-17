import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Home from "./pages/home";
import Loggedin from "./PrivateRouter/Loggedinuser";
import Notloggedin from "./PrivateRouter/Notloggedinuser";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements( 
      <Route>
        <Route element={<Loggedin/>}>
          <Route path='/' element={<Home/>}> </Route>
        </Route>
        <Route element={<Notloggedin/>}>
          <Route path='/register' element={<Register/>}> </Route>
          <Route path='/login' element={<Login/>}> </Route>
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
