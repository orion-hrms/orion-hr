import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListTimesheet from "./ListTimesheet";
import Manage from "./Manage";
import Navigation from "./Navigation";

import { Auth } from "aws-amplify";

const Timesheet = () => {
  const [userEmail, setUserEmail] = useState();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    getCurrentUser();
  }, []);

  ///////////////////////////////////////////////////////////////////
  const getCurrentUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    let groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    console.log("user", user);
    console.log("attributes", user.attributes);
    console.log("groups", groups);
    setUserEmail(user.attributes.email);
    if (groups != undefined && groups.includes("Administrator")) {
      setAdmin(true);
    }
  };
  ///////////////////////////////////////////////////////////////////

  return (
    <Router>
      {admin && <Navigation />}

      <Switch>
        <Route path="/" exact>
          <ListTimesheet userEmail={userEmail} />
        </Route>
        <Route path="/manage" exact>
          <Manage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Timesheet;
