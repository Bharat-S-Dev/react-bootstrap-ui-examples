import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, Row, Card, ListGroup, Badge } from 'react-bootstrap'
import { ArrowRight, Moon, Sun } from 'react-bootstrap-icons'
import { NavLink, Outlet } from 'react-router-dom'
import { routesData, interactiveRoutesData, Forms } from '../data/routesData';

const RBLayout = () => {
    // const [darkMode, setDarkMode] = useState(false);
    // useEffect(() => {
    //     const htmlElement = document.querySelector("html");
    //     htmlElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
    // }, [darkMode])
    return (
        <Container fluid>
            <Row>
                <Col><h3>React Bootstrap Components</h3></Col>
                {/* <Badge onClick={() => setDarkMode(!darkMode)} className="me-2 rounded-5 p-2"
                    bg={darkMode ? "light" : "dark"} role="button">
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </Badge> */}
            </Row>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Non Interactive</Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="ul" variant="flush" >
                                            {routesData.map((item, index) => {
                                                return (
                                                    <ListGroup.Item as="li" key={index}>
                                                        <ArrowRight />
                                                        <NavLink to={item.link}> {item.menuItem} </NavLink>
                                                    </ListGroup.Item>
                                                )
                                            })}
                                            {/* <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-badges">Badges</NavLink> </ListGroup.Item>
                                            <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-breadcrumb">Breadcrumbs</NavLink> </ListGroup.Item>
                                            <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-buttons">Buttons</NavLink> </ListGroup.Item>
                                            <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-buttongroup">ButtonGroups</NavLink> </ListGroup.Item>
                                            <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-cards">Cards</NavLink> </ListGroup.Item>
                                            <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-images">Images</NavLink> </ListGroup.Item>
                                            <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-listroup">ListGroup</NavLink> </ListGroup.Item>
                                            <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-figure">Figure</NavLink> </ListGroup.Item>
                                            <ListGroup.Item as="li"><ArrowRight /> <NavLink to="/rb-pagination">Pagination</NavLink> </ListGroup.Item> */}
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Interactive</Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="ul" variant="flush" >
                                            {interactiveRoutesData.map((item, index) => {
                                                return (
                                                    <ListGroup.Item as="li" key={index}>
                                                        <ArrowRight />
                                                        <NavLink to={item.link}> {item.menuItem} </NavLink>
                                                    </ListGroup.Item>
                                                )
                                            })}
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Forms</Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="ul" variant="flush" >
                                            {Forms.map((item, index) => {
                                                return (
                                                    <ListGroup.Item as="li" key={index}>
                                                        <ArrowRight />
                                                        <NavLink to={item.link}> {item.menuItem} </NavLink>
                                                    </ListGroup.Item>
                                                )
                                            })}
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={9}>
                    <Card>
                        <Card.Body>
                            <Outlet />
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default RBLayout
