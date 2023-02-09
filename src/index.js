import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        //errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
