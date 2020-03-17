import React, { Component } from "react";
import "./ContactItem.css";

class ContactItem extends Component {
  state = {
    name: "Richerd Stevens",
    address: "5842 Hillcrest Rd",
    phone: "(870) 288-4149",
    email: "richerd.stevens@example.com",
    gender: "men",
    avatar: 3
  };

  render() {
    const { name, address, phone, email, gender, avatar } = this.state;
    const URL = `http://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
    return (
      <li class="list-group-item">
        <div class="col-xs-12 col-sm-3">
          <img src={URL} alt={name} class="img-responsive img-circle" />
        </div>
        <div class="col-xs-12 col-sm-9">
          <span class="name">{name}</span>
          <br />
          <span
            class="glyphicon glyphicon-map-marker text-muted c-info"
            data-toggle="tooltip"
            title={address}
          ></span>
          <span>
            <span class="text-muted">{address}</span>
            <br />
          </span>
          <span
            class="glyphicon glyphicon-earphone text-muted c-info"
            data-toggle="tooltip"
            title={phone}
          ></span>
          <span>
            <span class="text-muted">{phone}</span>
            <br />
          </span>
          <span
            class="fa fa-comments text-muted c-info"
            data-toggle="tooltip"
            title={email}
          ></span>
          <span>
            <span class="text-muted">{email}</span>
            <br />
          </span>
        </div>
        <div class="clearfix"></div>
      </li>
    );
  }
}
export default ContactItem;
