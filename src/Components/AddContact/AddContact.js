import React from "react";
import "./AddContact.css";

class AddContact extends React.Component {
  state = {
    name: null,
    address: null,
    phone: null,
    avatar: null,
    email: null
  };

  getName = event => {
    //console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  };
  getName = event => {
    //console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  };
  getAddress = event => {
    //console.log(event.target.value);
    this.setState({
      address: event.target.value
    });
  };
  getPhone = event => {
    //console.log(event.target.value);
    this.setState({
      phone: event.target.value
    });
  };
  getAvatar = event => {
    //console.log(event.target.value);
    this.setState({
      avatar: event.target.value
    });
  };
  getEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.name}
        {this.state.address}
        {this.state.phone}
        {this.state.avatar}
        {this.state.email}
        <form>
          <div className="form-group">
            <div className="form-group">
              <label forHtml="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getName}
              />
            </div>
            <div className="form-group">
              <label forHtml="Address">Address</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getAddress}
              />
            </div>
            <div className="form-group">
              <label forHtml="Phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                onChange={this.getPhone}
              />
            </div>
            <div className="form-group">
              <label forHtml="Avatar">Avatar</label>
              <input
                type="number"
                min="1"
                max="99"
                className="form-control"
                onChange={this.getAvatar}
              />
            </div>
            <label forHtml="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.getEmail}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Men True Women False
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddContact;
