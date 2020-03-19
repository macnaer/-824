import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ContactList.css";

import ContactItem from "./ContactItem/ContacItem";

const ContactList = ({ List, onStarChange, onDeleteContact }) => {
  // console.log("Props in ContactList ", List);
  const singleContact = List.map(item => {
    return (
      <ContactItem
        key={item.id}
        name={item.name}
        address={item.address}
        phone={item.phone}
        email={item.email}
        gender={item.gender}
        avatar={item.avatar}
        star={item.star}
        onStarChange={() => onStarChange(item.id)}
        onDeleteContact={() => onDeleteContact(item.id)}
      />
    );
  });

  return (
    <Fragment>
      <div className="panel panel-default">
        <div className="panel-heading c-list">
          <span className="title">Contacts</span>
          <ul className="pull-right c-controls">
            <li>
              <Link
                to="/addcontact"
                data-toggle="tooltip"
                data-placement="top"
                title="Add Contact"
              >
                <i className="glyphicon glyphicon-plus"></i>
              </Link>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </div>
      </div>
      <ul className="list-group" id="contact-list">
        {singleContact}
      </ul>
    </Fragment>
  );
};
export default ContactList;
