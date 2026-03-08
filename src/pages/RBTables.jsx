// import React from "react";
// import { Table, Badge } from "react-bootstrap";

// const RBTables = () => {
//   const employees = [
//     {
//       name: "Joseph Oden",
//       dept: "Sales",
//       salary: "$64,000",
//       date: "Aug 3, 2024",
//       payment: "Pending",
//       status: "Full-Time",
//     },
//     {
//       name: "Carol Brown",
//       dept: "Support",
//       salary: "$82,000",
//       date: "Aug 6, 2024",
//       payment: "Negotiating",
//       status: "Part-Time",
//     },
//     {
//       name: "Peggy Castello",
//       dept: "Design",
//       salary: "$120,000",
//       date: "Aug 13, 2024",
//       payment: "Failed",
//       status: "Full-Time",
//     },
//     {
//       name: "Katherine Grey",
//       dept: "Sales",
//       salary: "$75,000",
//       date: "Aug 19, 2024",
//       payment: "Paid",
//       status: "Full-Time",
//     },
//   ];

//   const getBadgeVariant = (payment) => {
//     switch (payment) {
//       case "Pending":
//         return "primary";
//       case "Negotiating":
//         return "warning";
//       case "Failed":
//         return "danger";
//       case "Paid":
//         return "success";
//       default:
//         return "secondary";
//     }
//   };

//   return (
//     <div className="container mt-4">

//       {/*  Responsive Table */}
//       <h5 className="mt-4">Responsive Table</h5>
//       <Table responsive bordered hover className="mt-3">
//         <thead className="table-light">
//           <tr>
//             <th>Employee</th>
//             <th>Department</th>
//             <th>Salary</th>
//             <th>Payment Date</th>
//             <th>Payment Status</th>
//             <th>Employment Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp, index) => (
//             <tr key={index}>
//               <td>{emp.name}</td>
//               <td>{emp.dept}</td>
//               <td>{emp.salary}</td>
//               <td>{emp.date}</td>
//               <td>
//                 <Badge bg={getBadgeVariant(emp.payment)}>
//                   {emp.payment}
//                 </Badge>
//               </td>
//               <td>{emp.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/*  Non Responsive Table */}
//       <h5 className="mt-5">Non-Responsive Table</h5>
//       <Table bordered hover className="mt-3">
//         <thead className="table-light">
//           <tr>
//             <th>Employee</th>
//             <th>Department</th>
//             <th>Salary</th>
//             <th>Payment Date</th>
//             <th>Payment Status</th>
//             <th>Employment Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp, index) => (
//             <tr key={index}>
//               <td>{emp.name}</td>
//               <td>{emp.dept}</td>
//               <td>{emp.salary}</td>
//               <td>{emp.date}</td>
//               <td>
//                 <Badge bg={getBadgeVariant(emp.payment)}>
//                   {emp.payment}
//                 </Badge>
//               </td>
//               <td>{emp.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//     </div>
//   );
// };

// export default RBTables;




import React from "react";
import { Table, Badge } from "react-bootstrap";

const RBTables = () => {
  return (
    <div className="container mt-4">

      {/*  Responsive Table */}
      <h5 className="mt-4">Responsive Table</h5>

      <Table responsive bordered hover className="mt-3">
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
            <td>Sales</td>
            <td>$64,000</td>
            <td>Aug 3, 2024</td>
            <td><Badge bg="primary">Pending</Badge></td>
            <td>Full-Time</td>
          </tr>

          <tr>
            <td>Carol Brown</td>
            <td>Support</td>
            <td>$82,000</td>
            <td>Aug 6, 2024</td>
            <td><Badge bg="warning">Negotiating</Badge></td>
            <td>Part-Time</td>
          </tr>

          <tr>
            <td>Peggy Castello</td>
            <td>Design</td>
            <td>$120,000</td>
            <td>Aug 13, 2024</td>
            <td><Badge bg="danger">Failed</Badge></td>
            <td>Full-Time</td>
          </tr>

          <tr>
            <td>Katherine Grey</td>
            <td>Sales</td>
            <td>$75,000</td>
            <td>Aug 19, 2024</td>
            <td><Badge bg="success">Paid</Badge></td>
            <td>Full-Time</td>
          </tr>
        </tbody>
      </Table>


      {/*  Non-Responsive Table */}
      <h5 className="mt-5">Non-Responsive Table</h5>

      <Table bordered hover className="mt-3">
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
            <td>Sales</td>
            <td>$64,000</td>
            <td>Aug 3, 2024</td>
            <td><Badge bg="primary">Pending</Badge></td>
            <td>Full-Time</td>
          </tr>

          <tr>
            <td>Carol Brown</td>
            <td>Support</td>
            <td>$82,000</td>
            <td>Aug 6, 2024</td>
            <td><Badge bg="warning">Negotiating</Badge></td>
            <td>Part-Time</td>
          </tr>

          <tr>
            <td>Peggy Castello</td>
            <td>Design</td>
            <td>$120,000</td>
            <td>Aug 13, 2024</td>
            <td><Badge bg="danger">Failed</Badge></td>
            <td>Full-Time</td>
          </tr>

          <tr>
            <td>Katherine Grey</td>
            <td>Sales</td>
            <td>$75,000</td>
            <td>Aug 19, 2024</td>
            <td><Badge bg="success">Paid</Badge></td>
            <td>Full-Time</td>
          </tr>
        </tbody>
      </Table>

    </div>
  );
};

export default RBTables;
