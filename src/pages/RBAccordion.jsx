import React from "react";
import { useContext } from "react";
import { Accordion, AccordionContext, useAccordionButton, Card } from "react-bootstrap";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
// import Card from 'react-bootstrap/Card';

const RBAccordion = () => {

    function ContextAwareToggle({ children, eventKey, callback }) {
        const { activeEventKey } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(eventKey,);
        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <div
                role="button"
                className={`py-2 border-bottom fw-bold d-flex justify-content-between ${isCurrentEventKey ? "text-primary" : "text-black" }`}
                onClick={decoratedOnClick}
            >
                {children}
                {isCurrentEventKey ? <DashCircle />: <PlusCircle />}
            </div>
        );
    }

    return (
        <div>
            <h3>Accordion Example</h3>
            <Accordion defaultActiveKey="0">
                <div>
                    <ContextAwareToggle eventKey="0">What are the technology requirements?</ContextAwareToggle>
                    <Accordion.Collapse eventKey="0">
                        <div>You need laptop, internet and browser.</div>
                    </Accordion.Collapse>
                </div>
                <div>
                    <ContextAwareToggle eventKey="1">How can I ask questions or clear doubts?</ContextAwareToggle>
                    <Accordion.Collapse eventKey="1">
                        <div>You can ask in live sessions or forums.</div>
                    </Accordion.Collapse>
                </div>
            </Accordion>
        </div>
    )

}

export default RBAccordion;
