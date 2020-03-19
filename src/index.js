import React from "react";
import ReactDOM from "react-dom";
import uuid from "react-uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";

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
        avatar: 3,
        star: false
      },
      {
        id: uuid(),
        name: "Linus Torvalds",
        address: "1236 Stepana Banderu street",
        phone: "(068) 87-41-789",
        email: "linus@kernel.org",
        gender: "men",
        avatar: 34,
        star: true
      },
      {
        id: uuid(),
        name: "Deniss Richi",
        address: "12 Pr. Pease",
        phone: "(050) 288-41-491",
        email: "deniss@example.com",
        gender: "men",
        avatar: 76,
        star: true
      },
      {
        id: uuid(),
        name: "Camila terry",
        address: "12 London",
        phone: "(066) 77-61-291",
        email: "Camila@london.com",
        gender: "women",
        avatar: 23,
        star: false
      }
    ]
  };

  onStarChange = id => {
    // console.log("onStarChange ", id);
    const index = this.state.List.findIndex(elem => elem.id === id);
    let temList = this.state.List.slice();
    temList[index].star = !temList[index].star;
    this.setState(state => {
      return {
        star: !this.temList
      };
    });
  };

  onAddContact = (name, address, phone, avatar, email) => {
    console.log(
      `Name: ${name}\nAdderss: ${address}\nPhone: ${phone}\nAvatar: ${avatar}\nEmail: ${email}`
    );
    const newContact = {
      id: uuid(),
      name: name,
      address: address,
      phone: phone,
      email: email,
      gender: "women",
      avatar: avatar,
      star: false
    };
    const newList = [...this.state.List, newContact];
    this.setState({
      List: newList
    });
  };
  onDeleteContact = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    // console.log(id);
    // console.log(index);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState({
      List: newList
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <ContactList
                    List={this.state.List}
                    onStarChange={this.onStarChange}
                    onDeleteContact={this.onDeleteContact}
                  />
                )}
              />
              <Route
                path="/addcontact"
                exact
                render={() => <AddContact onAddContact={this.onAddContact} />}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
