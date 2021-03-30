import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";
// Since HomePage is the component that pass into the App.js, thereforeit can access to the history props.
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
