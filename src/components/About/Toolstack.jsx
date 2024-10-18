import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiLogoFigma, BiLogoGithub, BiLogoVisualStudio } from "react-icons/bi";
import {
    SiPostman,
    SiVercel,
    SiAdobephotoshop,
    SiAdobexd,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoVisualStudio />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoFigma />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAdobexd />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAdobephotoshop />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoGithub />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col>
        </Row>
    );
}

export default Toolstack;
