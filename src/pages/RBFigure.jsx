import React from "react";
import { Figure } from "react-bootstrap";

const RBFigure = () => {
  return (
    <div className="container mt-4">

      <Figure className="p-3 border rounded shadow-sm">
        <Figure.Image
          width="100%"
          alt="React Info"
          src="https://miro.medium.com/v2/resize:fit:1200/1*UngHYlsoG2JosM9P7KrXfQ.png"
        //   className="rounded"
          fluid
          rounded
          className="w-100"
        />
        <Figure.Caption className="mt-2 text-muted">
          Image Resource : Google.com
        </Figure.Caption>
      </Figure>

    </div>
  );
};

export default RBFigure;

