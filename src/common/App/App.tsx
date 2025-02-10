import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import modules from "../../modules/index.tsx";
import Authentication from "../auth/Authentication.tsx";
import { AuthProvider } from "../providers/AuthProvider.tsx";
import Login from "../auth/Login/index.tsx";
import Dashboard from "../../modules/Dashboard/Dashboard.tsx";
import { IRoute } from "../models/route.ts";
import ResetPassword from "../auth/ResestPssword/index.tsx";
import NewPassword from "../auth/NewPassword/index.tsx";
import ReduxProvider from "../providers/ReduxProvider.tsx";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <ReduxProvider>
        <AuthProvider>
          <Routes>
            {modules.map((module: IRoute) =>
              module.routeProps?.children ? (
                module.routeProps?.children.map((m) => (
                  <Route
                    path={m.path}
                    element={
                      <Authentication
                        children={m.element}
                        route={m.path.replace("/", "")}
                      />
                    }
                    key={m.path + m.name}
                  />
                ))
              ) : (
                <Route
                  path={module.routeProps.path}
                  element={
                    <Authentication
                      children={module.routeProps.element}
                      route={module.routeProps.path.replace("/", "")}
                    />
                  }
                  key={module.name + module.routeProps.path}
                />
              )
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route
              path="*"
              element={
                <Authentication children={<Dashboard />} route={"dashboard"} />
              }
            />
          </Routes>
        </AuthProvider>
      </ReduxProvider>
    </Router>
  );
};
export default App;
