import React from "react";
import "./ContactItem.css";

const ContactItem = () => {
  return (
    <li class="list-group-item">
      <div class="col-xs-12 col-sm-3">
        <img
          src="http://api.randomuser.me/portraits/men/49.jpg"
          alt="Scott Stevens"
          class="img-responsive img-circle"
        />
      </div>
      <div class="col-xs-12 col-sm-9">
        <span class="name">Scott Stevens</span>
        <br />
        <span
          class="glyphicon glyphicon-map-marker text-muted c-info"
          data-toggle="tooltip"
          title="5842 Hillcrest Rd"
        ></span>
        <span class="visible-xs">
          <span class="text-muted">5842 Hillcrest Rd</span>
          <br />
        </span>
        <span
          class="glyphicon glyphicon-earphone text-muted c-info"
          data-toggle="tooltip"
          title="(870) 288-4149"
        ></span>
        <span class="visible-xs">
          <span class="text-muted">(870) 288-4149</span>
          <br />
        </span>
        <span
          class="fa fa-comments text-muted c-info"
          data-toggle="tooltip"
          title="scott.stevens@example.com"
        ></span>
        <span class="visible-xs">
          {" "}
          <span class="text-muted">scott.stevens@example.com</span>
          <br />
        </span>
      </div>
      <div class="clearfix"></div>
    </li>
  );
};
export default ContactItem;
