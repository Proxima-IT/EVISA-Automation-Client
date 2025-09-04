import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Resgister";
import DashboardRoot from "../Root/DashboardRoot";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/DashboardPages/Profile";
import proxyList from "./proxyList";
import AutomationSettings from "../Pages/DashboardPages/AutomationSettings";
import CheckAppointment from "../Pages/CheckAppointment";
import DashboardDefault from "../Root/DefaultDashboard";
import AboutUs from "../Pages/About Us/AboutUs";
import ProfileSettings from "../Pages/ProfileSettings/ProfileSettings";
import Pricing from "../Pages/Pricing/Pricing";




export const router = createBrowserRouter([
    {
        path : "/",
        Component: Root,
        
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/aboutUs",
                Component: AboutUs
            },
            {
                path: "/profileSettings",
                element: <PrivateRoute> <ProfileSettings></ProfileSettings> </PrivateRoute>
            },
            {
                path: "/pricing",
                Component: Pricing
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
        ]
    },

    {
        path: "/dashboard",
        element: <DashboardRoot></DashboardRoot>,
        children: [
            {
                index: true, // this matches "/dashboard"
                element: <DashboardDefault/>
            },
            {
                path: "/dashboard/profile",
                Component: Profile
            },
            {
                path: "/dashboard/proxyList",
                Component: proxyList
            },
            {
                path: "/dashboard/automationSettings",
                Component: AutomationSettings
            },
            {
                path: "/dashboard/checkAppointment",
                Component: CheckAppointment
            },
        ]
    }
])