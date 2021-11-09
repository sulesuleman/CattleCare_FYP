import React from "react";

let LOGINSIGNUPPAGE = React.lazy(() => import("../pages/loginSignupPage"));
let LANDINGPAGE = React.lazy(() => import("../pages/landingPage"));
let DASHBOARDPAGE = React.lazy(() => import("../pages/dashboard"));
let ADDANIMALPAGE = React.lazy(() => import("../pages/addAnimalPage"));
let ANIMALSTATS = React.lazy(() => import("../pages/animalStats"));
let VIEWANIMALSTATS = React.lazy(() =>
  import("../pages/animalStats/viewAnimalStats")
);

let routes = [
  {
    path: "/login-signup",
    exact: true,
    Component: LOGINSIGNUPPAGE,
    isProtected: false,
    isPartOfDashboard: false,
  },
  {
    path: "/",
    exact: true,
    Component: LANDINGPAGE,
    isProtected: false,
    isPartOfDashboard: false,
  },
  {
    path: "/dashboard",
    exact: true,
    Component: DASHBOARDPAGE,
    isProtected: false,
    isPartOfDashboard: true,
  },
  {
    path: "/add-animal",
    exact: true,
    Component: ADDANIMALPAGE,
    isProtected: false,
    isPartOfDashboard: true,
  },
  {
    path: "/animal-stats",
    exact: true,
    Component: ANIMALSTATS,
    isProtected: false,
    isPartOfDashboard: true,
  },
  {
    path: "/animal-stats/:id",
    exact: true,
    Component: VIEWANIMALSTATS,
    isProtected: false,
    isPartOfDashboard: true,
  },
];

export default routes;
