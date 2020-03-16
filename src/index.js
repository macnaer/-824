import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="panel panel-default">
          <div class="panel-heading c-list">
            <span class="title">Contacts</span>
            <ul class="pull-right c-controls">
              <li>
                <a
                  href="#cant-do-all-the-work-for-you"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add Contact"
                >
                  <i class="glyphicon glyphicon-plus"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hide-search"
                  data-command="toggle-search"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Toggle Search"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ContactList />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
