import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import {Person,Speedometer2,Bell,Gear,BoxArrowRight} from "react-bootstrap-icons";

const CustomDropdown = ({
  type = "button",
  variant = "primary",
  title = "Profile",
  avatar,
  align = "start"
}) => {
  return (
    <Dropdown align={align}>

      {/* Avatar Toggle */}
      {type === "avatar" ? (
        <Dropdown.Toggle className="shadow-none border-0 p-0 bg-transparent">
          <Image src={avatar} width={40}
          roundedCircle />
        </Dropdown.Toggle>
      ) : (
        /* Button Toggle */
        <Dropdown.Toggle variant={variant}>
          <Person className="me-2" />
          {title}
        </Dropdown.Toggle>
      )}

      <Dropdown.Menu>
        <Dropdown.Item><Speedometer2 className="me-2" /> Dashboard</Dropdown.Item>
        <Dropdown.Item><Bell className="me-2" /> Notification</Dropdown.Item>
        <Dropdown.Item><Gear className="me-2" /> Settings</Dropdown.Item>

        <Dropdown.Divider />

        <Dropdown.Item><BoxArrowRight className="me-2" /> Logout</Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>
  );
};

export default CustomDropdown;