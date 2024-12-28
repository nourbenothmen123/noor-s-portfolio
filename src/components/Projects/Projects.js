import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import savepalestine from "../../Assets/Projects/savepalestine.png";
import tournoi from "../../Assets/Projects/tournoi.png";
import VenteVue from "../../Assets/Projects/VenteVue.png";
import electronicshop from "../../Assets/Projects/site electronic shop.png";
import sunshinecoffee from "../../Assets/Projects/sunshinecoffee.png";
import ArtyProd from "../../Assets/Projects/ArtyProd.png";
import shopswift from "../../Assets/Projects/shopswift.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electronicshop}
              isBlog={false}
              title="electronicshop"
              description="a project as part of my end-of-study internship, it is a site for selling electronic products. It includes a dashboard for managing products, variations, roles and permissions
               and a front-end part to display the products for sale with a filter according to the category."
              ghLink="https://github.com/nourbenothmen123/electronicshop"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopswift}
              isBlog={false}
              title="ShopSwift"
              description="it is a mean stack e-commerce application with a client frontend to explore the products displayed, place an order,
               pay (with stripe) and print the invoice. also an admin backend to manage products and users"
              ghLink="https://github.com/nourbenothmen123/ShopSwift"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VenteVue}
              isBlog={false}
              title="VenteVue"
              description="This is the backend part developed with SPRING BOOT (MVC architecture) of the VenteVue dashboard which is developed with ANGULAR 16 to visualize the statistics of settled and unsettled
               invoices by time period (week, month, year) and the management of customers and invoices"
              ghLink="https://github.com/nourbenothmen123/Backend-VenteVue"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={savepalestine}
              isBlog={false}
              title="SavePalestine"
              description="a mobile application developed with flutter (in frontend) and SQLite (in backend) with API consumption
               to collect donations for the Palestinian people with the help of the Tunisian Red Crescent."
              ghLink="https://github.com/nourbenothmen123/Save-Palestine"
              demoLink=""
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tournoi}
              isBlog={false}
              title="Tournoi mini foot"
              description="a website developed with Java Enterprise Edition (JEE) and CSS
               for the organization of a mini football tournament
it includes an authentication system, player, coach and user management."
              ghLink="https://github.com/nourbenothmen123/Tournoi-mini-foot"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ArtyProd}
              isBlog={false}
              title="ArtyProd"
              description="I created a web application for a graphic design agency. The latter facilitates the request for remote project completion
               for the agency's clients and allows them to consult the progress of their own projects."
              ghLink="https://github.com/nourbenothmen123/ArtyProd"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sunshinecoffee}
              isBlog={false}
              title="SunshineCoffee"
              description="a desktop application for managing a coffee system allowing user management, menu management, customer order taking, total calculation and invoice display.
                    Technical tools: C# MICROSOFT SQL"
              ghLink="https://github.com/nourbenothmen123/Sunshine-coffee"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
