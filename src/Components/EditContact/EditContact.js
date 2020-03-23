import React from "react";
import "./EditContact.css";

class EditContact extends React.Component {
  render() {
    console.log("Inside EditContact ", this.props.currentContact);
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
              />
            </div>
            <div className="form-group">
              <label forhtml="Address">Address</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getAddress}
              />
            </div>
            <div className="form-group">
              <label forhtml="Phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                onChange={this.getPhone}
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
              />
            </div>
            <label forhtml="exampleInputEmail1">Email address</label>
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
            <label className="form-check-label" forhtml="exampleCheck1">
              Men True Women False
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default EditContact;
