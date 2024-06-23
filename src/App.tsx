import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./Components/Log-In/LogIn";
import Register from "./Components/Log-In/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
