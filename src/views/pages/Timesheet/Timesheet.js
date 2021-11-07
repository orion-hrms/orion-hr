import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListTimesheet from "./ListTimesheet";
import Manage from "./Manage";
import Navigation from "./Navigation";

import { Auth } from "aws-amplify";

const Timesheet = () => {
  const [user, setUser] = useState({email:"test"});
  return (
    <Router>
      {true && <Navigation />}

      <Switch>
        <Route path="/" exact>
          <ListTimesheet user={user} />
        </Route>
        <Route path="/manage" exact>
          <Manage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Timesheet;
