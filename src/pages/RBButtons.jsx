// import React from 'react'
// import { Button } from 'react-bootstrap-icons'

// const RBButtons = () => {
//   return (
//     <>
//       <Button href="#">Link</Button> 
//       <Button type="submit">Button</Button>
//       <Button as="input" type="button" value="Input" />
//       <Button as="input" type="submit" value="Submit" />
//       <Button as="input" type="reset" value="Reset" />
//     </>
//   )
// }

// export default RBButtons


import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const RBButtons = () => {
  const [format, setFormat] = useState({
    bold: false,
    italic: false,
    underline: false,
    strike: false,
  });

  const toggleStyle = (type) => {
    setFormat({ ...format, [type]: !format[type] });
  };

  return (
    <div className="p-4">

      {/* ================= Button Styles ================= */}
      <h2 className="mb-3">Button Styles</h2>

      <div className="d-flex gap-3 mb-5 flex-wrap">
        <Button variant="primary">Normal Button</Button>
        <Button variant="primary"><Pencil className="me-2" />Edit Record</Button>
        <Button variant="outline-primary">Outline Button</Button>
        <Button variant="primary" disabled>Disabled Button</Button>
      </div>

      {/* ================= Button Types ================= */}
      <h2 className="mb-3">Button Types</h2>

      <div className="d-flex gap-3 mb-5 flex-wrap">
        <Button as="a" href="#" variant="primary">Link</Button>
        <Button variant="primary">Button</Button>
        <Button type="button" variant="primary">Input</Button>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="primary">Reset</Button>
      </div>

      {/* ================= Toggle Buttons ================= */}
      <h2 className="mb-3">Toggle Buttons</h2>

      <ButtonGroup className="mb-4">
        <ToggleButton
          id="bold"
          type="checkbox"
          variant="outline-primary"
          checked={format.bold}
          value="bold"
          onChange={() => toggleStyle("bold")}
        >
          <strong>B</strong>
        </ToggleButton>

        <ToggleButton
          id="italic"
          type="checkbox"
          variant="outline-primary"
          checked={format.italic}
          value="italic"
          onChange={() => toggleStyle("italic")}
        >
          <em>I</em>
        </ToggleButton>

        <ToggleButton
          id="underline"
          type="checkbox"
          variant="outline-primary"
          checked={format.underline}
          value="underline"
          onChange={() => toggleStyle("underline")}
        >
          <u>U</u>
        </ToggleButton>

        <ToggleButton
          id="strike"
          type="checkbox"
          variant="outline-primary"
          checked={format.strike}
          value="strike"
          onChange={() => toggleStyle("strike")}
        >
          <s>S</s>
        </ToggleButton>
      </ButtonGroup>

      {/* ================= Output Text ================= */}
      <div>
        <p
          style={{
            fontWeight: format.bold ? "bold" : "normal",
            fontStyle: format.italic ? "italic" : "normal",
            textDecoration: `
              ${format.underline ? "underline" : ""} 
              ${format.strike ? " line-through" : ""}
            `,
          }}
          className="fs-5"
        >
          buttons will be reflected.
        </p>
      </div>
      <br />
      {/* <span className={value.join(" ")}>buttons will be reflected.</span> */}
    </div>
  );
};

export default RBButtons;


