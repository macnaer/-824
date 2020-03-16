import React from "react";
import "./ContactList.css";

import CintactItem from "./ContactItem/ContacItem";

const ContactList = () => {
  return (
    <ul class="list-group" id="contact-list">
      <CintactItem />
    </ul>
  );
};
export default ContactList;
