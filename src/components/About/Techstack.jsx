import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoNodejs,
    BiLogoMongodb,
    BiLogoTailwindCss,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoRedux,
    BiLogoGithub,
    BiLogoGit,
    BiLogoCPlusPlus,
} from "react-icons/bi";

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
} from "react-icons/di";
import {
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiRedux,
    SiMysql,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoJavascript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoTailwindCss />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoRedux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <BiLogoGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoCPlusPlus />
            </Col>
        </Row>
    );
}

export default Techstack;
