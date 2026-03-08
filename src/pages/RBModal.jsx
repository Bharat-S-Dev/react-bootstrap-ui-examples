import { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import { Envelope } from "react-bootstrap-icons";

const RBModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-4">

      {/* Subscribe Button */}
      <Button variant="primary" onClick={handleShow}>
        <Envelope className="me-2" />
        Subscribe
      </Button>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Don't miss out</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Signup for our newsletter to stay upto date.</p>

          <InputGroup>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
            />
            <Button variant="outline-secondary">
              Subscribe
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default RBModal;
