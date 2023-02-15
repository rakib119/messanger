import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Home from "./pages/home";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements( 
      <Route>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/register' element={<Register/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
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
