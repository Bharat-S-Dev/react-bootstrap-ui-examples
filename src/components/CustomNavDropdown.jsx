import { NavDropdown } from "react-bootstrap";
import { useState } from "react";

const CustomNavDropdown = ({ title, items }) => {

  const [open, setOpen] = useState(false);

  return (
    <NavDropdown
      title={title}
      show={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {items.map((item, index) =>
        item.divider ? (
          <NavDropdown.Divider key={index} />
        ) : (
          <NavDropdown.Item key={index}>
            {item.label}
          </NavDropdown.Item>
        )
      )}
    </NavDropdown>
  );
};

export default CustomNavDropdown;