import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Ben othmen Nour el houda </span>
            from <span className="purple"> Tunisia.</span>
            <br />
            I am currently a first-year professional master's student in computer and network 
            systems development at the Higher Institute of Technological Studies in Sfax. <a className="purple" href="https://isetsf.rnu.tn/">ISET SFAX</a>
            <br />
            In 2024, I obtained my degree in computer technology specializing 
            in the development of information systems from the Higher Institute of Technological Studies in Sfax
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning books
            </li>
            <li className="about-activity">
              <ImPointRight /> Practice sport
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Trust your hard work.
            It's Unlocking doors you can't see yet."{" "}
          </p>
          <footer className="blockquote-footer">Nour el houda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
