import React, { Fragment } from "react";
import "./ContactList.css";

import CintactItem from "./ContactItem/ContacItem";

const ContactList = () => {
  return (
    <Fragment>
      <h2>CONTACT LIST Component</h2>
      <div>First contact</div>
      <CintactItem />
    </Fragment>
  );
};
export default ContactList;
