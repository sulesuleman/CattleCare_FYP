import React from "react";

let LOGINSIGNUPPAGE = React.lazy(() => import("../pages/loginSignupPage"));
let LANDINGPAGE = React.lazy(() => import("../pages/landingPage"));
let DASHBOARDPAGE = React.lazy(() => import("../pages/dashboard"));
let ADDANIMALPAGE = React.lazy(() => import("../pages/addAnimalPage"));
let ANIMALSTATS = React.lazy(() => import("../pages/animalStats"));
let FARMERPAGE = React.lazy(() => import("../pages/farmerStatistics"));
let VIEWANIMALSTATS = React.lazy(() =>
  import("../pages/animalStats/viewAnimalStats")
);
let FEEDLISTING = React.lazy(() => import("../pages/feedListing"));
let MANAGEPROFILE = React.lazy(() => import("../pages/manageProfile"));

export const BasicRoutes = [
  {
    path: "/login-signup",
    exact: true,
    Component: LOGINSIGNUPPAGE,
    isProtected: false,
    isPartOfDashboard: false,
    role: ["all"],
  },
  {
    path: "/",
    exact: true,
    Component: LANDINGPAGE,
    isProtected: false,
    isPartOfDashboard: false,
    role: ["all"],
  },
];

export const FarmerRoutes = [
  {
    path: "/dashboard",
    exact: true,
    Component: DASHBOARDPAGE,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["farmer"],
  },
  {
    path: "/manage-profile",
    exact: true,
    Component: MANAGEPROFILE,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["farmer"],
  },
  {
    path: "/add-animal",
    exact: true,
    Component: ADDANIMALPAGE,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["farmer"],
  },
  {
    path: "/animal-stats",
    exact: true,
    Component: ANIMALSTATS,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["farmer"],
  },
  {
    path: "/animal-stats/:id",
    exact: true,
    Component: VIEWANIMALSTATS,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["farmer"],
  },
  {
    path: "/manage-feeds",
    exact: true,
    Component: FEEDLISTING,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["farmer"],
  },
];

export const AdminRoutes = [
  {
    path: "/farmer-statistics",
    exact: true,
    Component: FARMERPAGE,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["admin"],
  },
];
