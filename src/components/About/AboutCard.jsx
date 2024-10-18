import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I’m <span className="purple">Kuldeep Rathod</span> from{" "}
            <span className="purple">Ahmedabad, Gujarat.</span> I’m a Computer
            Engineering student currently in my 7th semester at GTU.
            <br />
            <br />
            I’m passionate about programming and have honed my skills in
            React.js, JavaScript, TypeScript, NodeJS and other modern technologies. I’m excited to
            explore opportunities in web development and innovative tech
            solutions.
            <br />
            <br /> Welcome to my portfolio, where you can see my projects and
            learn more about what I do!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
