import { Loader } from "globalComponents";
import React, { Suspense } from "react";
import { Redirect, Route } from "react-router";
import { Switch } from "react-router-dom";
import { useRoleAuth } from "../contexts";
import { DashboardLayout, PageLayout } from "../layout";
import { AdminRoutes, BasicRoutes, FarmerRoutes } from "./routes";

export const RouterConfig = () => {
  const role = useRoleAuth().role;
  const auth = useRoleAuth().authed;


  return (
    <Suspense
      fallback={
        <Loader/>
      }
    >
      {auth ? (
        role === "farmer" ? (
          <DashboardLayout>
            <Switch>
              {FarmerRoutes.map(({ Component, exact, path  }, index) => (
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
