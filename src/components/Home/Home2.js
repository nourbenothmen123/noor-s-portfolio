import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-nourimg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am passionate about web and mobile development, constantly seeking 
            to bridge the gap between research and the growth of my skills.
              <br />
              <br />As a developer,
              I specialize in
              <i>
                <b className="purple"> React.js, Node.js, Angular, and Spring Boot.</b>
              </i>
              <br />
              <br />
              I am deeply interested 
             in exploring new technologies, particularly in the fields of  &nbsp;
              <i>
                <b className="purple">data science and artificial intelligence,
                </b>{" "}
                <b className="purple">
                as they represent an evolving and fascinating domain.
                </b>
              </i>
              <br />
              <br />
              Additionally, 
            I am keen on working on AI projects and have a strong interest in
              <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                  Business Intelligence (BI) and DevOps.
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nourbenothmen123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nour-ben-othmen-b4964625b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nourbenothmen_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
