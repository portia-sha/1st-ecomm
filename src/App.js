import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      {/* 
      exact: means that the router will find the entire not partial matches url for the pages and render. without exact, it may render multiple components that will match the url!
      '/': localhosts:3000/
      Switch component function: as long as switch found the path mactched, it will render the first match route and nothing else will render 
      Therefore in here, with Switch and exact, the homepage will only render with / path anf nothing else*/}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
