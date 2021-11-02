import React, { Component, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import { Auth } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

// Auth.currentSession()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const App = () => {
  useEffect(() => {
    getAllUserDataToState();
  }, []);

  const getAllUserDataToState = async () => {
    // const { attributes } = await Auth.currentAuthenticatedUser();
    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    console.log("userrrrrrr", user);
    console.log("userrrr2", user.attributes);
    console.log("userrrr2", user.attributes);
    // event.request.usernameParameter
    return user;
  };
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={(props) => <Register {...props} />}
          />

          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default withAuthenticator(App);
