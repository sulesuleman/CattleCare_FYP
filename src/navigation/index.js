import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "../globalComponents/footer";
import routes from "./routes";
import { DashboardLayout } from "../layout/dashboardLayout";

export const RouterConfig = () => {
  return (
    <Router>
      <DashboardLayout>
        {/* <NavBar /> */}
        <Suspense fallback={<h1>loading</h1>}>
          <Switch>
            {routes.map(({ Component, exact, path }, index) => (
              <Route
                exact={exact}
                path={path}
                key={`${path}-${index}`}
                render={(props) => <Component {...props} />}
              />
            ))}
          </Switch>
        </Suspense>
        <Footer />
      </DashboardLayout>
    </Router>
  );
};
