import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce"
              description="Designed and developed a modern, responsive e-commerce website frontend using React.js and Tailwind CSS. The application features a clean and user-friendly interface for browsing products, managing the shopping cart, and viewing product details."
              ghLink="https://github.com/Akil-Ansari-cmd/Poorvika"
              demoLink="https://poorvika-livid.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Quotation-Maker"
              description="Developed a sleek and responsive online quotation maker using React.js and Tailwind CSS. The application allows users to dynamically create, edit, and preview business quotations in a clean and professional layout.."
              ghLink="https://github.com/Akil-Ansari-cmd/Refrens"
              demoLink="https://refrens-topaz.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Admin Panel"
              description="Developed a fully responsive and interactive admin panel using React.js and Tailwind CSS with integrated REST APIs. The panel allows administrators to efficiently manage users, products, and other system data through a clean and functional interface."
              ghLink="https://github.com/Akil-Ansari-cmd/Admin-Panel"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
