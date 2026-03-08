// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import CustomDropdown from "../components/CustomDropdown";

// const RBDropdowns = () => {
//   return (
//     <Container className="mt-4">
//       <Row>
//         <h1>Dropdown Example</h1>

//         {/* Blue Dropdown */}
//         <Col md={4}>
//           <CustomDropdown variant="primary" title="Profile"/>
//         </Col>

//         {/* Outline Dropdown */}
//         <Col md={4}>
//           <CustomDropdown variant="outline-primary" title="Profile" />
//         </Col>

//         {/* Avatar Dropdown */}
//         <Col md={4} className="text-end">
//           <CustomDropdown
//             type="avatar"
//             align="end"
//             avatar="https://www.w3schools.com/howto/img_avatar2.png"
//           />
//         </Col>

//       </Row>
//     </Container>
//   );
// };

// export default RBDropdowns;




// this file doesn't use component

import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Image } from "react-bootstrap";
import { Person, Speedometer2, Bell, Gear, BoxArrowRight } from "react-bootstrap-icons";

const RBDropdowns = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <h1>Dropdown Example</h1>

        {/* Blue Button Dropdown */}
        <Col md={4}>
          <div
            onMouseEnter={() => setOpenDropdown("blue")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Dropdown show={openDropdown === "blue"}>
              <Dropdown.Toggle variant="primary">
                <Person className="me-2" />
                Profile
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item><Speedometer2 className="me-2" />Dashboard</Dropdown.Item>
                <Dropdown.Item><Bell className="me-2" />Notification</Dropdown.Item>
                <Dropdown.Item><Gear className="me-2" />Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item><BoxArrowRight className="me-2" />Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>

        {/* Outline Button Dropdown */}
        <Col md={4}>
          {/* <div
            onMouseEnter={() => setOpenDropdown("outline")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Dropdown show={openDropdown === "outline"}> */}
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary">
                <Person className="me-2" />
                Profile
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item><Speedometer2 className="me-2" />Dashboard</Dropdown.Item>
                <Dropdown.Item><Bell className="me-2" />Notification</Dropdown.Item>
                <Dropdown.Item><Gear className="me-2" />Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item><BoxArrowRight className="me-2" />Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          {/* </div> */}
        </Col>

        {/* Avatar Dropdown */}
        <Col md={4} className="text-end">
          <div
            onMouseEnter={() => setOpenDropdown("avatar")}
            // onMouseLeave={() => setOpenDropdown(null)}
            onMouseLeave={() => setTimeout(() => setOpenDropdown(null), 200)}
          >
            <Dropdown align="end" show={openDropdown === "avatar"}>
              <Dropdown.Toggle
                className="shadow-none"
                bsPrefix="border-0 p-0 bg-transparent"
                // bsPrefix=" "
              >
                <Image
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  roundedCircle
                  width={40}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item><Speedometer2 className="me-2" />Dashboard</Dropdown.Item>
                <Dropdown.Item><Bell className="me-2" />Notification</Dropdown.Item>
                <Dropdown.Item><Gear className="me-2" />Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item><BoxArrowRight className="me-2" />Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default RBDropdowns;