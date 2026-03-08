import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { Calendar, Clock, CurrencyRupee } from "react-bootstrap-icons";

const RBNavTabs = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-3">NavTabs Example</h2>

      <Tab.Container defaultActiveKey="overview">

        {/* Navigation Tabs */}
        <Nav variant="underline" className="border-bottom mb-3">
          <Nav.Item>
            <Nav.Link eventKey="overview">Overview</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="scope">Project Scope</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="team">Team Members</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="tasks">Tasks</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="chat">Chat</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Tab Content */}
        <Tab.Content>

          {/* Overview */}
          <Tab.Pane eventKey="overview">
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <Row className="mb-2">
              <Col className="d-flex align-items-center gap-2">
                <Calendar className="text-primary" />
                <strong>Start Date</strong>
              </Col>
              <Col className="text-end">01 Jul, 2025</Col>
            </Row>

            <hr />

            <Row className="mb-2">
              <Col className="d-flex align-items-center gap-2">
                <Calendar className="text-primary" />
                <strong>End Date</strong>
              </Col>
              <Col className="text-end">31 Dec, 2025</Col>
            </Row>

            <hr />

            <Row className="mb-2">
              <Col className="d-flex align-items-center gap-2">
                <Clock className="text-primary" />
                <strong>Estimate Time</strong>
              </Col>
              <Col className="text-end">5 Months</Col>
            </Row>

            <hr />

            <Row className="mb-2">
              <Col className="d-flex align-items-center gap-2">
                <CurrencyRupee className="text-primary" />
                <strong>Estimate Cost</strong>
              </Col>
              <Col className="text-end">₹ 5,80,000</Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="scope"><p>Project Scope Content</p></Tab.Pane>
          <Tab.Pane eventKey="team"><p>Team Members Content</p></Tab.Pane>
          <Tab.Pane eventKey="tasks"><p>Tasks Content</p></Tab.Pane>
          <Tab.Pane eventKey="chat"><p>Chat Content</p></Tab.Pane>

        </Tab.Content>

      </Tab.Container>
    </Container>
  );
};

export default RBNavTabs;