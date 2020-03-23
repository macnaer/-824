import React from "react";
import { Redirect } from "react-router-dom";
import "./EditContact.css";

class EditContact extends React.Component {
  state = {
    id: this.props.currentContact.id,
    name: this.props.currentContact.name,
    address: this.props.currentContact.address,
    phone: this.props.currentContact.phone,
    email: this.props.currentContact.email,
    gender: this.props.currentContact.gender,
    avatar: this.props.currentContact.avatar,
    star: this.props.currentContact.star,
    isHome: false
  };

  getName = event => {
    this.setState({
      name: event.target.value
    });
  };
  getName = event => {
    this.setState({
      name: event.target.value
    });
  };
  getAddress = event => {
    this.setState({
      address: event.target.value
    });
  };
  getPhone = event => {
    this.setState({
      phone: event.target.value
    });
  };
  getAvatar = event => {
    this.setState({
      avatar: event.target.value
    });
  };
  getEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  onSendData = event => {
    event.preventDefault();
    const { id, name, address, phone, avatar, email, isHome } = this.state;
    this.props.onEditCurrentContact(name, address, phone, avatar, email, id);
    this.setState({
      isHome: true
    });
  };

  render() {
    //console.log("Inside EditContact ", this.props.currentContact);
    const { name, address, phone, email, gender, avatar, isHome } = this.state;
    if (isHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <form onSubmit={this.onSendData}>
          <div className="form-group">
            <div className="form-group">
              <label forhtml="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getName}
                placeholder={name}
              />
            </div>
            <div className="form-group">
              <label forhtml="Address">Address</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getAddress}
                placeholder={address}
              />
            </div>
            <div className="form-group">
              <label forhtml="Phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                onChange={this.getPhone}
                placeholder={phone}
              />
            </div>
            <div className="form-group">
              <label forhtml="Avatar">Avatar</label>
              <input
                type="number"
                min="1"
                max="99"
                className="form-control"
                onChange={this.getAvatar}
                placeholder={avatar}
              />
            </div>
            <label forhtml="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.getEmail}
              placeholder={email}
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
            <label className="form-check-label" forhtml="exampleCheck1">
              Men True Women False
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditContact;
