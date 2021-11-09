import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardLayout, PageLayout } from "../layout";
import routes from "./routes";

export const RouterConfig = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-100 w-100 flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        }
      >
        <Switch>
          {routes.map(
            ({ Component, exact, path, isPartOfDashboard }, index) => (
              <Route
                exact={exact}
                path={path}
                key={`${path}-${index}`}
                render={(props) =>
                  isPartOfDashboard ? (
                    <DashboardLayout>
                      <Component {...props} />
                    </DashboardLayout>
                  ) : (
                    <PageLayout>
                      <Component {...props} />{" "}
                    </PageLayout>
                  )
                }
              />
            )
          )}
        </Switch>
      </Suspense>
    </Router>
  );
};
