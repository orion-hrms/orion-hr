import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home,Add, LIST, MANAGE,  } from "./components";


function Forum() {
  return (
    <div className="App">

      <Router>
        
        <Navigation />

        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/add" exact component={() => <Add />} />
          <Route path="/list" exact component={() => <LIST />} />
          <Route path="/manage" exact component={() => <MANAGE />} />
          
        </Switch>

        <Footer />
        
      </Router>
    </div>
  );
}

export default Forum;