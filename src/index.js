import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
  return (
    <Fragment>
      <h1>Contact List</h1>
      <div className="subtitle">APP</div>
      <ContactList />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
