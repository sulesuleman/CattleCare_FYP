import React, { Suspense, useEffect, useRef } from "react";
import { Spinner } from "react-bootstrap";
import { Switch } from "react-router-dom";
import { AdminRoutes, BasicRoutes, FarmerRoutes } from "./routes";
import { Redirect, Route } from "react-router";
import { useRoleAuth } from "../contexts";
import { DashboardLayout, PageLayout } from "../layout";

export const RouterConfig = () => {
  const roleFromContext = useRoleAuth().role;
  const authFromContext = useRoleAuth().authed;
  const roleRef = useRef(roleFromContext);
  const authRef = useRef(authFromContext);


  useEffect(() => {
    roleRef.current = roleFromContext;
  }, [roleFromContext]);

  useEffect(() => {
    authRef.current = authFromContext;
  }, [authFromContext]);


  console.log(roleRef, authRef);

  return (
    <Suspense
      fallback={
        <div className="h-100 w-100 flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      }
    >
      {
        authRef?.current ?
          roleRef.current == 'farmer' ?
            <DashboardLayout>
              <Switch>
                {
                  FarmerRoutes.map(({ Component, exact, path }, index) => (
                    <Route path={path} exact={exact}>
                      <Component />
                    </Route>
                  ))
                }
                <Redirect to='/dashboard' />
              </Switch>
            </DashboardLayout>
            :
            <DashboardLayout>
              <Switch>
                {
                  AdminRoutes.map(({ Component, exact, path }, index) => (
                    <Route path={path} exact={exact}>
                      <Component />
                    </Route>
                  ))
                }
                <Redirect to='/farmer-statistics' />
              </Switch>
            </DashboardLayout>
          :
          <PageLayout>
            <Switch>
              {
                BasicRoutes.map(({ Component, path, exact }, index) => (
                  <Route path={path} exact={exact}>
                    <Component />
                  </Route>
                ))
              }
              <Redirect to='/' />
            </Switch>
          </PageLayout>
      }
    </Suspense>
  );
};