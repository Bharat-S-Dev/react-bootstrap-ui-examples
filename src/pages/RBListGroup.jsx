import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Youtube,
  TwitterX,
  Linkedin,
} from "react-bootstrap-icons";

const RBListGroup = () => {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <Card style={{ width: "500px" }} className="shadow-sm rounded-4 p-3">
        
        <h3 className="mb-4">Social Media Traffic</h3>

        <ListGroup variant="flush">
          
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <Facebook size={22} className="text-primary" />
              <span>Facebook</span>
            </div>
            <span>20%</span>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <Instagram size={22} className="text-primary" />
              <span>Instagram</span>
            </div>
            <span>20%</span>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <Youtube size={22} className="text-primary" />
              <span>YouTube</span>
            </div>
            <span>20%</span>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <TwitterX size={22} className="text-primary" />
              <span>TwitterX</span>
            </div>
            <span>20%</span>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <Linkedin size={22} className="text-primary" />
              <span>LinkedIn</span>
            </div>
            <span>20%</span>
          </ListGroup.Item>

        </ListGroup>

      </Card>
    </div>
  );
};

export default RBListGroup;


// import React from "react";
// import { Card, ListGroup } from "react-bootstrap";
// import {Facebook,Instagram,Youtube,TwitterX,Linkedin,} from "react-bootstrap-icons";

// const RBListGroup = () => {

//   const socialData = [
//     { name: "Facebook", icon: Facebook, percent: "20%", color: "text-primary" },
//     { name: "Instagram", icon: Instagram, percent: "20%", color: "text-danger" },
//     { name: "YouTube", icon: Youtube, percent: "20%", color: "text-danger" },
//     { name: "TwitterX", icon: TwitterX, percent: "20%", color: "text-dark" },
//     { name: "LinkedIn", icon: Linkedin, percent: "20%", color: "text-primary" },
//   ];

//   return (
//     <div className="container mt-4 d-flex justify-content-center">
//       <Card style={{ width: "500px" }} className="shadow-sm rounded-4 p-3">
        
//         <h3 className="mb-4">Social Media Traffic</h3>

//         <ListGroup variant="flush">
//           {socialData.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <ListGroup.Item
//                 key={index}
//                 className="d-flex justify-content-between align-items-center"
//               >
//                 <div className="d-flex align-items-center gap-3">
//                   <Icon size={22} className={item.color} />
//                   <span>{item.name}</span>
//                 </div>
//                 <span>{item.percent}</span>
//               </ListGroup.Item>
//             );
//           })}
//         </ListGroup>

//       </Card>
//     </div>
//   );
// };

// export default RBListGroup;
