import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CustomNavDropdown from "../components/CustomNavDropdown";
import { navbarMenus } from "../data/navbarData";
import ContactOffcanvas from "../components/ContactOffcanvas";

const RBNavbarOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <h3>NavbarOffcanvas Example with custom components</h3>
      <Navbar bg="light" expand="lg" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand className="fw-bold bg-dark text-white px-3 py-2">RB</Navbar.Brand>

          <Navbar.Toggle  />
          <Navbar.Collapse>

            <Nav className="me-auto ms-3">
              <Nav.Link>Home</Nav.Link>

              {navbarMenus.map((menu, index) => (
                <CustomNavDropdown
                  key={index}
                  title={menu.title}
                  items={menu.items}
                />
              ))}

            </Nav>

            {/* Right Buttons */}
            <div className="d-flex gap-2">
              <Button variant="primary">Login</Button>
              <Button variant="outline-primary">Sign Up</Button>
              <Button variant="dark" onClick={handleShow}>Contact</Button>
            </div>

          </Navbar.Collapse>

        </Container>
      </Navbar>

      {/* Reusable Offcanvas */}
      <ContactOffcanvas show={show} handleClose={handleClose} />
    </>
  );
};

export default RBNavbarOffcanvas;


// import { useState } from "react";
// import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas } from "react-bootstrap";
// import { GeoAlt, Envelope, Telephone } from "react-bootstrap-icons";

// const RBNavbarOffcanvas = () => {
//   const [show, setShow] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   // const [servicesOpen, setServicesOpen] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar bg="light" expand="lg" className="shadow-sm py-3">
//         <Container>
//           <Navbar.Brand className="fw-bold bg-dark text-white px-3 py-2">
//             RB
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse>

//             {/* Left Menu */}
//             <Nav className="me-auto ms-3">
//               <Nav.Link>Home</Nav.Link>
//               <Nav.Link>Services</Nav.Link>
//               {/* <NavDropdown
//                 title="Services"
//                 show={servicesOpen}
//                 onMouseEnter={() => setServicesOpen(true)}
//                 onMouseLeave={() => setServicesOpen(false)}
//               >
//                 <NavDropdown.Item>Web Development</NavDropdown.Item>
//                 <NavDropdown.Item>App Development</NavDropdown.Item>
//                 <NavDropdown.Item>UI/UX Design</NavDropdown.Item>
//                 <NavDropdown.Item>Digital Marketing</NavDropdown.Item>
//               </NavDropdown> */}


//               <NavDropdown
//                 title="Company"
//                 show={dropdownOpen}
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={() => setDropdownOpen(false)}
//               >
//                 <NavDropdown.Item>About Us</NavDropdown.Item>
//                 <NavDropdown.Item>Our Team</NavDropdown.Item>
//                 <NavDropdown.Item>Infrastructure</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item>Testimonials</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>

//             {/* Right Buttons */}
//             <div className="d-flex gap-2">
//               <Button variant="primary">Login</Button>
//               <Button variant="outline-primary">Sign Up</Button>
//               <Button variant="dark" onClick={handleShow}>Contact</Button>
//             </div>

//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Offcanvas Right Panel */}
//       <Offcanvas show={show} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Contact Us</Offcanvas.Title>
//         </Offcanvas.Header>

//         <Offcanvas.Body>
//           <h4 className="fw-bold">We are here to help you!</h4>
//           <hr />

//           <h5>Indixpert</h5>

//           <p>
//             <GeoAlt size={20} className="text-secondary" />
//             <strong>Our Offices :</strong> <br />
//             1: Hyderabad, Telangana, India <br />
//             2: Gurugram, Haryana, India
//           </p>

//           <p>
//             <Envelope size={20} className="text-secondary" />
//             <strong>Email</strong> <br />
//             contact@indixpert.com
//           </p>

//           <p>
//             <Telephone size={20} className="text-secondary" />
//             <strong>Phone</strong> <br />
//             (+91) 778 899 2897
//           </p>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default RBNavbarOffcanvas;





// import React from 'react'
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import { Justify } from 'react-bootstrap-icons'

// const RBNavbarOffcanvas = () => {
//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         {/* <Navbar.Brand href="#home" className='bg-black text-white px-2'>React-Bootstrap</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         {/* <Navbar.Toggle bsPrefix=' ' aria-controls='basic-navbar-nav' label="my label"
//         className='btn btn-outline-secondary'>
//           <Justify /> Menu
//         </Navbar.Toggle> */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   )
// }

// export default RBNavbarOffcanvas
