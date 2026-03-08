
import React from "react";
import { Table, Badge } from "react-bootstrap";

const RBBadges = () => {
  return (
    <div>
      <h3 className="mb-4">Employee Salary Table</h3>

      <Table striped bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Payment Date</th>
            <th>Payment Status</th>
            <th>Employment Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Joseph Oden</td>
            <td><i className="bi bi-cart me-2"></i>Sales</td>
            <td>$64,000</td>
            <td>Aug 3, 2024</td>
            <td><Badge bg="primary">PENDING</Badge></td>
            <td>Full-Time</td>
          </tr>

          <tr>
            <td>Carol Brown</td>
            <td><i className="bi bi-telephone me-2"></i>Support</td>
            <td>$82,000</td>
            <td>Aug 6, 2024</td>
            <td><Badge bg="warning" text="dark">NEGOTIATING</Badge></td>
            <td>Part-Time</td>
          </tr>

          <tr>
            <td>Peggy Castello</td>
            <td><i className="bi bi-vector-pen me-2"></i>Design</td>
            <td>$120,000</td>
            <td>Aug 13, 2024</td>
            <td><Badge bg="danger">FAILED</Badge></td>
            <td>Full-Time</td>
          </tr>

          <tr>
            <td>Katherine Grey</td>
            <td><i className="bi bi-cart me-2"></i>Sales</td>
            <td>$75,000</td>
            <td>Aug 19, 2024</td>
            <td><Badge bg="success">PAID</Badge></td>
            <td>Full-Time</td>
          </tr>

          <tr>
            <td>Sandra Palace</td>
            <td><i className="bi bi-vector-pen me-2"></i>Design</td>
            <td>$54,000</td>
            <td>Aug 22, 2024</td>
            <td><Badge bg="primary">PENDING</Badge></td>
            <td>Contractor</td>
          </tr>

          <tr>
            <td>Nelson Metz</td>
            <td><i className="bi bi-cart me-2"></i>Sales</td>
            <td>$28,000</td>
            <td>Aug 27, 2024</td>
            <td><Badge bg="dark">OVERDUE</Badge></td>
            <td>Part-Time</td>
          </tr>

          <tr>
            <td>Roger Ryder</td>
            <td><i className="bi bi-cart me-2"></i>Sales</td>
            <td>$93,000</td>
            <td>Aug 31, 2024</td>
            <td><Badge bg="success">PAID</Badge></td>
            <td>Contractor</td>
          </tr>

          <tr>
            <td>Evan Walter</td>
            <td><i className="bi bi-telephone me-2"></i>Support</td>
            <td>$55,000</td>
            <td>Sep 5, 2024</td>
            <td><Badge bg="warning" text="dark">NEGOTIATING</Badge></td>
            <td>Full-Time</td>
          </tr>

          <tr>
            <td>Julien Saint</td>
            <td><i className="bi bi-vector-pen me-2"></i>Design</td>
            <td>$87,000</td>
            <td>Sep 11, 2024</td>
            <td><Badge bg="dark">OVERDUE</Badge></td>
            <td>Full-Time</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default RBBadges;
