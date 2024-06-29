import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./Components/Log-In/LogIn";
import Register from "./Components/Log-In/Register";
import Home from "./Components/Main/Home";
import Stock from "./Components/Main/Stock/Stock";

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
  {
    path: "/stock",
    element: <Stock />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
