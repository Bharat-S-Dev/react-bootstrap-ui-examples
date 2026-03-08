import React from "react";
import {
  Button,
  OverlayTrigger,
  Popover,
  Tooltip,
  Container
} from "react-bootstrap";

const RBOverlays = () => {
  // Reusable Popover
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover bottom</Popover.Header>
      <Popover.Body>
        <strong>Holy guacamole!</strong> Check this info.
      </Popover.Body>
    </Popover>
  );

  // Reusable Tooltip
  const renderTooltip = (text) => (
    <Tooltip id={`tooltip-${text}`}>{text}</Tooltip>
  );

  return (
    <Container className="mt-4 text-center">

      <h4 className="mb-4">Overlays</h4>

      {/* POPPOVERS */}
      <div className="mb-4 d-flex justify-content-center gap-3 flex-wrap">
        <OverlayTrigger placement="top" overlay={popover}>
          <Button variant="outline-secondary">
            Popover on top
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={popover}>
          <Button variant="outline-secondary">
            Popover on right
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={popover}>
          <Button variant="outline-secondary">
            Popover on bottom
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="left" overlay={popover}>
          <Button variant="outline-secondary">
            Popover on left
          </Button>
        </OverlayTrigger>
      </div>

      <hr />

      {/* TOOLTIPS */}
      <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
        <OverlayTrigger placement="top" overlay={renderTooltip("Tooltip on top")}>
          <Button variant="secondary">
            Tooltip on top
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={renderTooltip("Tooltip on right")}>
          <Button variant="secondary">
            Tooltip on right
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={renderTooltip("Tooltip on bottom")}>
          <Button variant="secondary">
            Tooltip on bottom
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="left" overlay={renderTooltip("Tooltip on left")}>
          <Button variant="secondary">
            Tooltip on left
          </Button>
        </OverlayTrigger>
      </div>

    </Container>
  );
};

export default RBOverlays;
