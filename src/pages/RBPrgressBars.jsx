import { useState } from "react";
import { Button, ProgressBar, Card, Badge } from "react-bootstrap";

const RBProgressBars = () => {
    const [progress, setProgress] = useState(5);

    const increase = () => {
        if (progress < 100) setProgress(progress + 5);
    };

    const decrease = () => {
        if (progress > 0) setProgress(progress - 5);
    };

    return (
        <div className="container mt-4">

            {/* Buttons */}
            <div className="mb-4 d-flex gap-3">
                <Button onClick={increase}>Progress + 5%</Button>
                <Button variant="primary" onClick={decrease}>Progress - 5%</Button>
            </div>

            {/* Progress Section */}
            <h6>Completed {progress}%</h6>
            {/* <ProgressBar className="mb-4">
                <ProgressBar
                    now={progress}
                    label={`${progress}%`}
                    variant={progress < 30 ? "danger" : progress < 70 ? "warning" : "success"}
                />
            </ProgressBar> */}
            <ProgressBar now={progress} label={`${progress}%`} striped variant="success" className="mb-2" />
            <ProgressBar now={progress} label={`${progress}%`} striped variant="danger" className="mb-2" style={{height:"10px"}}/>

            {/* Card Section */}
            <Card style={{ width: "300px" }} className="shadow-sm">
                <Card.Body>
                    <Card.Title>Bootstrap Dashboard Application</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Web Development</Card.Subtitle>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    <Badge bg="info" className="mb-3">In Progress</Badge>
                    <ProgressBar now={progress} className="mb-3" />

                    <div className="d-flex justify-content-between small text-muted">
                        <div>
                            <strong>Due Date:</strong>
                            <br />
                            1 Jan, 2022
                        </div>
                        <div>
                            <strong>Budget:</strong>
                            <br />
                            $123,000
                        </div>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default RBProgressBars;

