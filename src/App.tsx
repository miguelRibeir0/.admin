// import { useEffect } from "react";
import {
	createBrowserRouter,
	RouterProvider,
	// useNavigate,
	// Outlet,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import LogIn from "./Components/Log-In/LogIn";
// import Register from "./Components/Log-In/Register";
import Home from "./Components/Main/Home";
import Stock from "./Components/Main/Stock/Stock";
import Sales from "./Components/Main/Sales/Sales";
import Budget from "./Components/Main/Budget/Budget";
import Plugin from "./Components/Main/Plug-ins/Plug-ins";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
});

// function RedirectIfNotLoggedIn() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const userId = sessionStorage.getItem("userId");
//     if (userId === null) {
//       navigate("/"); // Logic to redirect to login page if not logged in
//     }
//   }, [navigate]);

//   return <Outlet />; // Render children routes
// }

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{ path: "/dashboard", element: <Home /> },
	{ path: "/stock", element: <Stock /> },
	{ path: "/sales", element: <Sales /> },
	{ path: "/budget", element: <Budget /> },
	{ path: "/plugins", element: <Plugin /> },

	// {
	//   path: "/register",
	//   element: <Register />,
	// },
	// {
	//   path: "/",
	//   element: <RedirectIfNotLoggedIn />, // Redirect all to login if not logged in
	//   children: [
	//     { path: "/dashboard", element: <Home /> },
	//     { path: "/stock", element: <Stock /> },
	//     { path: "/sales", element: <Sales /> },
	//     { path: "/budget", element: <Budget /> },
	//     { path: "/plugins", element: <Plugin /> },
	//   ],
	// },
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
