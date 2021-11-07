import React from "react";

let LOGINSIGNUPPAGE = React.lazy(() => import("../pages/loginSignupPage"));
let LANDINGPAGE = React.lazy(() => import("../pages/landingPage"));
let DASHBOARDPAGE = React.lazy(() => import("../pages/dashboard"));

let routes = [
  {
    path: "/login-signup",
    exact: true,
    Component: LOGINSIGNUPPAGE,
    isProtected: false,
  },
  {
    path: "/",
    exact: true,
    Component: LANDINGPAGE,
    isProtected: false,
  },
  {
    path: "/dashboard",
    exact: true,
    Component: DASHBOARDPAGE,
    isProtected: false,
  },
];

export default routes;
