import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const products = [
    {
        id: 1,
        title: "Bluetooth Headphones",
        img: "https://m.media-amazon.com/images/I/61KNJav3S9L._SX522_.jpg",
        desc: "Boult Newly Launched Flex On Ear Bluetooth Headphones with 80H Playtime, 40mm Bass Drivers, ENC Mic, Fast Charging.",
        price: "₹1,099",
        oldPrice: "₹3,290",
    },
    {
        id: 2,
        title: "The Ear Gaming Headphone",
        img: "https://m.media-amazon.com/images/I/61GywIq-pwL._AC_UY327_FMwebp_QL65_.jpg.com/images/I/71Qk2Xlq7FL._SX522_.jpg",
        desc: "BTG Thunder Gaming Headphone with 70H Playtime, RGB LEDs, Detachable Mic, Dual Pairing.",
        price: "₹1,599",
        oldPrice: "₹3,990",
    },
    {
        id: 3,
        title: "boAt Rockerz 450",
        img: "https://m.media-amazon.com/images/I/61u1VALn6JL._SX522_.jpg",
        desc: "boAt Rockerz 450, 15 HRS Battery, 40mm Drivers, Dual Modes, Wireless Bluetooth Headphones.",
        price: "₹1,399",
        oldPrice: "₹3,990",
    },
];

const RBCards = () => {
    return (
        <div className="p-4">

            <Row className="g-4">
                {products.map((product) => (
                    <Col md={4} key={product.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={product.img}
                                style={{ height: "300px", objectFit: "contain", padding: "15px" }}
                            />

                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.title}</Card.Title>

                                <Card.Text className="text-muted small">{product.desc}</Card.Text>

                                <div className="mt-auto">
                                    <div className="mb-3">
                                        <span className="fw-bold">{product.price}</span>{" "}
                                        <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <Button variant="outline-primary"> Add To Cart</Button>
                                        <Button variant="primary">Buy Now</Button>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default RBCards;

