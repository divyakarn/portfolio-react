import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Socialite from "../../Assets/Socialite.png";
import AquaClothing from "../../Assets/AquaClothing.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Socialite}
              isBlog={false}
              title="Socialite"
              description="A Full Stack web app which enables users to post stuff and to interact with their friends. Used Socket.IO for real-time communication and Multer for uploading files and images. Used Passport.js for authentication and developed the backend using Node.js, Express and MongoDB database."
              ghLink="https://github.com/DevanshuBilthare/Socialite"
              demoLink="https://socialitewebapp.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AquaClothing}
              isBlog={false}
              title="Aqua Clothing"
              description="A fully functional E-commerce web application in which admin can post products according to categories and users can buy it.
     Developed the frontend using React.js, used Redux for state management and  Firebase for authentication and database."
              ghLink="https://github.com/DevanshuBilthare/aqua-clothing"
              demoLink="https://aqua-db.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
