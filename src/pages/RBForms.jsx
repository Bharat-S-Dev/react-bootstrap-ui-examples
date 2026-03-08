import { Container, Row, Col, Form, Button } from "react-bootstrap";

function RBForms() {
  return (
    <Container className="mt-4">
      <h3 className="mb-4">Registration Details</h3>

      <Form>
        {/* Row 1 */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Col>
        </Row>

        {/* Row 3 */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Select Country</Form.Label>
              <Form.Select>
                <option>Select country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Select State</Form.Label>
              <Form.Select>
                <option>Select state</option>
                <option>Gujarat</option>
                <option>Maharashtra</option>
                <option>Rajasthan</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Row 4 */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Select City</Form.Label>
              <Form.Select>
                <option>Select city</option>
                <option>Ahmedabad</option>
                <option>Mumbai</option>
                <option>Jaipur</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Zip/Pin Code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>

        {/* Address */}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        {/* Sex + Hobbies */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Sex</Form.Label>
            <div>
              <Form.Check inline type="radio" label="Male" name="gender"/>
              <Form.Check inline type="radio" label="Female" name="gender"/>
            </div>
          </Col>

          <Col md={6}>
            <Form.Label>Hobbies</Form.Label>
            <div>
              <Form.Check inline type="checkbox" label="Drawing" />
              <Form.Check inline type="checkbox" label="Singing" />
              <Form.Check inline type="checkbox" label="Dancing" />
            </div>
          </Col>
        </Row>

        {/* Resume */}
        <Form.Group className="mb-3">
          <Form.Label>Resume</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        {/* Terms */}
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Agree to terms and conditions" />
        </Form.Group>
        <Button variant="primary">Submit form</Button>
      </Form>
    </Container>
  );
}

export default RBForms;
