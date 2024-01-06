import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RazorPay from "../../Assets/Projects/RazorPay.jpg";
import Weather from "../../Assets/Projects/Weather.jpg";
import StudyNotion from "../../Assets/Projects/StudyNotion.jpg";
import TripPlanner from "../../Assets/Projects/TripPlanner.jpg";
import KishanMitra from "../../Assets/Projects/kishan-Mitra.jpg";
import builder from "../../Assets/Projects/portfolio-builder.jpg";

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
              imgPath={Weather}
              isBlog={false}
              title="Weather-App"
              description="An weather app assisting your weather depends on your live locaton . Additional feature of getting other city tempreature and using error techniques if any error occured"
              ghLink="https://github.com/1sisodiyaji/WeatherApp"
              demoLink="https://weather-app-lhlq.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TripPlanner}
              isBlog={false}
              title="TripPlanner"
              description="It helps you in planning a trip ,by location and budjet.These is a core java based project by using swing ,awt and JDBC techs have been Used ."
              ghLink="https://github.com/1sisodiyaji/TripPlanners"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RazorPay}
              isBlog={false}
              title="RazorPay"
              description=" These is a front -page of Razor pay made by using Tailwind CSS and responsive website of performing Some features."
              demoLink="razor-pay-navy.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudyNotion}
              isBlog={false}
              title="StudyNotion"
              description="Actually these is a fully optimised site for student to track thier records ..It is Ongoing...."
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KishanMitra}
              isBlog={false}
              title="Kishan Mitra"
              description="These is an tech app for farmers to navigate through weather , current price of goods along with an chat bot integration is inprocess"
              demoLink ="https://kishanmitra01.000webhostapp.com/"
              ghLink ="https://github.com/1sisodiyaji/Kishan-Mitra.git"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={builder}
              isBlog={false}
              title="Portfolio Builder"
              description="These is an portfolio Bilder website"
              demoLink ="https://vyaktitv.000webhostapp.com/"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
