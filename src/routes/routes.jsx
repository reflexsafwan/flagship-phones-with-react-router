import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import About from "../pages/About";
import Favourites from "../pages/Favourites";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: "true",
                element: <Home></Home>,
                hydrateFallbackElement: <h2> loading,  please wait......</h2>,
                loader: () => fetch("phones.json"),

            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/favourites",
                Component: Favourites
            },
            {
                path: "/phone-details",
                Component: PhoneDetails
            },

        ]
    },

])