import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            <p className="purple">Welcome to my portfolio!</p>
                            I'm a passionate MERN Stack Developer skilled in
                            <span className="purple">
                                {" "}
                                React.js, JavaScript, Typescript, Redux, NodeJS,
                                TailwindCSS, HTML, and CSS.{" "}
                            </span>
                            I enjoy building innovative web technologies and
                            products, applying my knowledge of modern JavaScript
                            libraries and frameworks to create dynamic and
                            responsive user experiences. I'm also proficient in
                            using{" "}
                            <span className="purple"> Git and GitHub </span> for
                            version control.
                            <br />
                            <br />I also excel in designing engaging and
                            user-friendly interfaces. With experience in{" "}
                            <span className="purple">
                                {" "}
                                Figma, Adobe XD, and Photoshop,{" "}
                            </span>{" "}
                            I craft visually appealing designs that enhance user
                            experiences and align with the latest design trends.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <br />
                        <h3>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </h3>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="mailto:kuldiprathod375@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillMail />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://github.com/Kuldeep-Rathod"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/kuldeep-rtd/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://wa.me/918780042872?text=Hey%2C%20Kuldeep%21"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaWhatsapp />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/kuldeep_rtd"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
