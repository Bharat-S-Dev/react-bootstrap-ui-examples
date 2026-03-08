import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const RBSpinners = () => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = () => {
    setLoading(true);
  };

  const handleCancel = () => {
    setLoading(false);
  };

  return (
    <div>
        <h4>Spinners</h4>
      <Button onClick={handleSubmit} disabled={loading} variant="primary">
        {loading && <Spinner animation="border" size="sm" className="me-2" />}
        Submit
      </Button>{" "}

      <Button onClick={handleCancel} disabled={!loading} variant="danger">
        Cancel
      </Button>
    </div>
  );
};

export default RBSpinners;




// import React, { useState } from "react";
// import { Button, Spinner } from "react-bootstrap";

// const RBSpinners = () => {
//   const [loading, setLoading] = useState(false);

//   return (
//     <div className="container mt-4">
//       <h4>Spinners</h4>

//       <Button
//         variant="primary"
//         className="me-2"
//         onClick={() => setLoading(true)}
//         disabled={loading}
//       >
//         {loading && (
//           <Spinner
//             as="span"
//             animation="border"
//             size="sm"
//             className="me-2"
//           />
//         )}
//         {loading ? "Submitting" : "Click to Submit"}
//       </Button>

//       <Button
//         variant="danger"
//         onClick={() => setLoading(false)}
//         disabled={!loading}
//       >
//         Cancel
//       </Button>
//     </div>
//   );
// };

// export default RBSpinners;
