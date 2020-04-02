import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

function CustomDropdown(props) {
  const filteredValues = props.values.filter(val => val !== undefined);

  console.log("FIltered VAlues", filteredValues);
  let menu = [];
  let menuItems = [];
  filteredValues.forEach(val => {
    if (!menuItems.includes(val)) {
      menuItems.push(val);
      menu.push(
        <Dropdown.Item as="button" onClick={() => props.handleOnClick(val)}>
          {" "}
          {val}{" "}
        </Dropdown.Item>
      );
    }
  });
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title={props.name}>
        {menu}
      </DropdownButton>
    </>
  );
}

export default CustomDropdown;
