import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
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
