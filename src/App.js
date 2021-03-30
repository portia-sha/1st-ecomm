import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* 
      exact: means that the router will find the entire not partial matches url for the pages and render. without exact, it may render multiple components that will match the url!
      '/': localhosts:3000/
      Switch component function: as long as switch found the path mactched, it will render the first match route and nothing else will render 
      Therefore in here, with Switch and exact, the homepage will only render with / path anf nothing else*/}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
