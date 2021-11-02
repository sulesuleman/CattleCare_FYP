import React from "react";

let LOGINSIGNUPPAGE = React.lazy(() => import("../pages/loginSignupPage"));


let routes = [
    {
        path : '/login-signup',
        exact : true,
        Component : LOGINSIGNUPPAGE,
    }
]


export default routes;
