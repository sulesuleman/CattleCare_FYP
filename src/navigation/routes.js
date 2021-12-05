import React from "react";

let LOGINSIGNUPPAGE = React.lazy(() => import("pages/loginSignupPage"));
let LANDINGPAGE = React.lazy(() => import("pages/landingPage"));
let DASHBOARDPAGE = React.lazy(() => import("pages/farmerPages/dashboard"));
let ADDANIMALPAGE = React.lazy(() => import("pages/farmerPages/addAnimalPage"));
let ANIMALSTATS = React.lazy(() => import("pages/farmerPages/animalStats"));
let FARMERPAGE = React.lazy(() => import("pages/adminPages/farmerStatistics"));
let VIEWANIMALSTATS = React.lazy(() =>
  import("pages/farmerPages/animalStats/viewAnimalStats")
);
let FEEDLISTING = React.lazy(() => import("pages/farmerPages/feedListing"));
let MANAGEPROFILE = React.lazy(() => import("pages/farmerPages/manageProfile"));
let DAILYFEEDCONSUMPTION = React.lazy(() =>
  import("pages/farmerPages/dailyFeedConsumption")
);
let DAILYYIELDCONSUMPTION = React.lazy(() =>
  import("pages/farmerPages/dailyYieldConsumption")
);

let MANAGEFARMER = React.lazy(() =>
  import("pages/adminPages/manageFarmerPage")
);

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
  {
    path: "/manage-daily-feed",
    exact: true,
    Component: DAILYFEEDCONSUMPTION,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["farmer"],
  },
  {
    path: "/manage-daily-yield",
    exact: true,
    Component: DAILYYIELDCONSUMPTION,
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
  {
    path: "/manage-farmers",
    exact: true,
    Component: MANAGEFARMER,
    isProtected: true,
    isPartOfDashboard: true,
    role: ["admin"],
  },
];
