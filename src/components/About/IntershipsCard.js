import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple"></span>
            <span className="purple"></span>
            <br />
            During my academic journey at ISET Sfax (Bachelor’s degree), 
            I completed three mandatory internships. These experiences aimed to help me gain practical knowledge,
             integrate into the professional environment, and build valuable external relationships. Each internship 
            allowed me to apply my academic learning in real-world scenarios and develop essential professional skills
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> End studies Intership at
            HYPER MEDIA 
            </li>
            <li className="about-activity">
              <ImPointRight />Advanced Training Internship at
              Inspire digital agency
            </li>
            <li className="about-activity">
              <ImPointRight /> Introductory Intership at
              Tunisian Post
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
