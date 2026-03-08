import { Offcanvas } from "react-bootstrap";
import { GeoAlt, Envelope, Telephone } from "react-bootstrap-icons";

const ContactOffcanvas = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Us</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <h4 className="fw-bold">We are here to help you!</h4>
        <hr />

        <h5>Indixpert</h5>

        <p>
          <GeoAlt size={20} className="text-secondary" />
          <strong> Our Offices :</strong> <br />
          1: Hyderabad, Telangana, India <br />
          2: Gurugram, Haryana, India
        </p>

        <p>
          <Envelope size={20} className="text-secondary" />
          <strong> Email</strong> <br />
          contact@indixpert.com
        </p>

        <p>
          <Telephone size={20} className="text-secondary" />
          <strong> Phone</strong> <br />
          (+91) 778 899 2897
        </p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ContactOffcanvas;