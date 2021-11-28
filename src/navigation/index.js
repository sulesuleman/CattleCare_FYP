import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import { Switch } from "react-router-dom";
import { useRoleAuth } from "../contexts";
import { DashboardLayout, PageLayout } from "../layout";
import { AdminRoutes, BasicRoutes, FarmerRoutes } from "./routes";

export const RouterConfig = () => {
  const role = useRoleAuth().role;
  const auth = useRoleAuth().authed;
  console.log('auth' , auth)
  return (
    <Suspense
      fallback={
        <div className="h-100 w-100 flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      }
    >
      {auth ? (
        role === "farmer" ? (
          <DashboardLayout>
            <Switch>
              {FarmerRoutes.map(({ Component, exact, path }, index) => (
                <Route path={path} exact={exact}>
                  <Component />
                </Route>
              ))}
              <Redirect to="/dashboard" />
            </Switch>
          </DashboardLayout>
        ) : (
          <DashboardLayout>
            <Switch>
              {AdminRoutes.map(({ Component, exact, path }, index) => (
                <Route path={path} exact={exact}>
                  <Component />
                </Route>
              ))}
              <Redirect to="/farmer-statistics" />
            </Switch>
          </DashboardLayout>
        )
      ) : (
        <PageLayout>
          <Switch>
            {BasicRoutes.map(({ Component, path, exact }, index) => (
              <Route path={path} exact={exact}>
                <Component />
              </Route>
            ))}
            <Redirect to="/" />
          </Switch>
        </PageLayout>
      )}
    </Suspense>
  );
};
