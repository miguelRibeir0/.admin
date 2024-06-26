import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./Components/Log-In/LogIn";
import Register from "./Components/Log-In/Register";
import Home from "./Components/Main/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
