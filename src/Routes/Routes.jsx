import { createBrowserRouter, Navigate } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import DashboardRoot from "../Root/DashboardRoot";

import Profile from "../Pages/DashboardPages/Profile";
import AutomationSettings from "../Pages/DashboardPages/AutomationSettings";
import DashboardDefault from "../Root/DefaultDashboard";
import AboutUs from "../Pages/About Us/AboutUs";

import ProxyList from "../Pages/DashboardPages/proxyList";
import CheckAppointment from "../Pages/DashboardPages/CheckAppointment";
import Register from "../Pages/Register/Register";
import AdminLayout from "../layout/AdminDashboard/AdminLayout";
import AddClient from "../layout/AdminDashboard/AddClient";
import ManageClient from "../layout/AdminDashboard/ManageClient";
import EditClient from "../layout/AdminDashboard/EditClient";
import PrivateRoute from "./PrivateRoute";

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
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
     {
  path: "/admin",
  element: (
    <PrivateRoute>
      <AdminLayout />
    </PrivateRoute>
  ),
  children: [
    {
      index: true,
      element: <Navigate to="add-client" replace />,
    },
    {
      path: "add-client",
      element: <AddClient />,
    },
    {
      path: "manage-client",
      element: <ManageClient />,
    },
    {
      path: "edit-client/:id",
      element: <EditClient />,
    },
  ],
}

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
