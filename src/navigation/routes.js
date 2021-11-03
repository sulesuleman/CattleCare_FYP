import React from "react";

let LOGINSIGNUPPAGE = React.lazy(() => import("../pages/loginSignupPage"));
let DASHBOARDPAGE = React.lazy(() => import("../pages/landingPage"));

let routes = [
  {
    path: "/login-signup",
    exact: true,
    Component: LOGINSIGNUPPAGE,
  },
  {
    path: "/",
    exact: true,
    Component: DASHBOARDPAGE,
  },
];

export default routes;
