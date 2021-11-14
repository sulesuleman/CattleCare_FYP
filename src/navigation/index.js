import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Switch } from "react-router-dom";
import RoleAuthCheck from "./HOC/roleAuthWrapper";
import routes from "./routes";

export const RouterConfig = () => {
  return (
    <Suspense
      fallback={
        <div className="h-100 w-100 flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      }
    >
      <Switch>
        {routes.map(({ Component, ...rest }, index) => (     
          <RoleAuthCheck {...rest}>
            <Component />
          </RoleAuthCheck>
        ))}
      </Switch>
    </Suspense>
  );
};
