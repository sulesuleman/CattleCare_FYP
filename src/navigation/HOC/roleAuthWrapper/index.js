import react, { useEffect, useRef } from "react";
import { Redirect, Route } from "react-router";

import { useRoleAuth } from "../../../contexts";
import { DashboardLayout, PageLayout } from "../../../layout";

const RoleAuthCheck = ({ children, ...rest }) => {
  const roleFromContext = useRoleAuth().role;
  const authFromContext = useRoleAuth().authed;
  const roleRef = useRef(roleFromContext);
  const authRef = useRef(authFromContext);

  console.log("rest", rest);

  useEffect(() => {
    roleRef.current = roleFromContext;
  }, [roleFromContext]);

  useEffect(() => {
    authRef.current = authFromContext;
  }, [authFromContext]);

  const getRedirect = (location) => {
    if (!authRef.current) {
      return <Redirect to="/login-signup" />;
    } else {
      return children;
    }
  };

  return (
    <Route
      path={rest.path}
      exact={rest.exact}
      render={
        ({ location }) => getRedirect(location)
        // authRef && location.pathname === "/login-signup" ? (
        //   <Redirect to="/" />
        // ) : rest.role.includes(roleRef.current) ? (
        //   rest.isPartOfDashboard ? (
        //     <DashboardLayout>{children}</DashboardLayout>
        //   ) : (
        //     <PageLayout>{children}</PageLayout>
        //   )
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/login-signup",
        //       state: { from: location },
        //     }}
        //   />
        // )
      }
    />
  );
};

export default RoleAuthCheck;
