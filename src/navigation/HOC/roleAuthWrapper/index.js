import react, { useEffect, useRef } from "react";
import { Redirect, Route } from "react-router";

import { useRoleAuth } from "../../../contexts";
import { DashboardLayout, PageLayout } from "../../../layout";

const RoleAuthCheck = ({ children, ...rest }) => {
  const roleFromContext = useRoleAuth().role;
  const authFromContext = useRoleAuth().authed;
  const roleRef = useRef(roleFromContext);
  const authRef = useRef(authFromContext);
  console.log("authRef", authFromContext);

  useEffect(() => {
    roleRef.current = roleFromContext;
  }, [roleFromContext]);

  useEffect(() => {
    authRef.current = authFromContext;
  }, [authFromContext]);

  const getRedirect = (location) => {
    if (authRef.current) {
      if (location.pathname === "/login-signup") {
        if (roleRef.current === "farmer") {
          return (
            <DashboardLayout>
              <Redirect to="/dashboard" />
            </DashboardLayout>
          );
        } else {
          return (
            <DashboardLayout>
              <Redirect to="/farmer-satistics" />
            </DashboardLayout>
          );
        }
      } else {
        if (rest.role.includes(roleRef.current)) {
          return rest.isPartOfDashboard ? (
            <DashboardLayout>{children}</DashboardLayout>
          ) : (
            <PageLayout>{children}</PageLayout>
          );
        } else {
          if (roleRef.current === "farmer") {
            return (
              <DashboardLayout>
                <Redirect to="/dashboard" />
              </DashboardLayout>
            );
          } else {
            return (
              <DashboardLayout>
                <Redirect to="/farmer-satistics" />
              </DashboardLayout>
            );
          }
        }
      }
    } else {
      return <Redirect to="/login-signup"  />;
    }
  };

  return (
    <Route
      {...rest}
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
