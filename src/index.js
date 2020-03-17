import React from "react";
import ReactDOM from "react-dom";
import uuid from "react-uuid";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";

class App extends React.Component {
  state = {
    List: [
      {
        id: uuid(),
        name: "Richerd Stevens",
        address: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "richerd.stevens@example.com",
        gender: "men",
        avatar: 3
      },
      {
        id: uuid(),
        name: "Linus Torvalds",
        address: "1236 Stepana Banderu street",
        phone: "(068) 87-41-789",
        email: "linus@kernel.org",
        gender: "men",
        avatar: 34
      },
      {
        id: uuid(),
        name: "Deniss Richi",
        address: "12 Pr. Pease",
        phone: "(050) 288-41-491",
        email: "deniss@example.com",
        gender: "men",
        avatar: 76
      },
      {
        id: uuid(),
        name: "Camila terry",
        address: "12 London",
        phone: "(066) 77-61-291",
        email: "Camila@london.com",
        gender: "women",
        avatar: 23
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading c-list">
              <span className="title">Contacts</span>
              <ul className="pull-right c-controls">
                <li>
                  <a
                    href="#cant-do-all-the-work-for-you"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add Contact"
                  >
                    <i className="glyphicon glyphicon-plus"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hide-search"
                    data-command="toggle-search"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Toggle Search"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ContactList List={this.state.List} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
