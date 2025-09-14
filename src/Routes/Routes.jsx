import { createBrowserRouter, Navigate } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import DashboardRoot from "../Root/DashboardRoot";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/DashboardPages/Profile";
import AutomationSettings from "../Pages/DashboardPages/AutomationSettings";
import DashboardDefault from "../Root/DefaultDashboard";
import AboutUs from "../Pages/About Us/AboutUs";
import ProfileSettings from "../Pages/ProfileSettings/ProfileSettings";
import Pricing from "../Pages/Pricing/Pricing";
import ProxyList from "../Pages/DashboardPages/proxyList";
import CheckAppointment from "../Pages/DashboardPages/CheckAppointment";
import Register from "../Pages/Register/Register";
import AdminLayout from "../layout/AdminDashboard/AdminLayout";
import AddClient from "../layout/AdminDashboard/AddClient";
import ManageClient from "../layout/AdminDashboard/ManageClient";
import EditClient from "../layout/AdminDashboard/EditClient";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/profileSettings",
        element: (
          <PrivateRoute>
            {" "}
            <ProfileSettings></ProfileSettings>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/admin",
        Component: AdminLayout,
        children: [
          
          {
            path: "add-client",
            Component: AddClient,
          },
          {
            path: "manage-client",
            Component: ManageClient,
          },
          {
            path: "edit-client/:id",
            Component: EditClient,
          },
        ],
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardRoot></DashboardRoot>,
    children: [
      {
        index: true, // this matches "/dashboard"
        element: <DashboardDefault />,
      },
      {
        path: "/dashboard/profile",
        Component: Profile,
      },
      {
        path: "/dashboard/proxyList",
        Component: ProxyList,
      },
      {
        path: "/dashboard/automationSettings",
        Component: AutomationSettings,
      },
      {
        path: "/dashboard/checkAppointment",
        Component: CheckAppointment,
      },
    ],
  },
]);
