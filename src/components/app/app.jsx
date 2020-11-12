import React from "react";
import PageMain from "../page-main/page-main";
import {Redirect} from "react-router"
import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <PageMain />
        </Route>
        <Route exact path={`*`}>
          <Redirect to="/"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

