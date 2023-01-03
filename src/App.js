import VendingMachine from "./VendingMachine";
import React from "react";
import Soda from "./Soda";
import Chips from "./Chips";
import FordF150 from "./FordF150";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/1993fordf150">
          <FordF150 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
