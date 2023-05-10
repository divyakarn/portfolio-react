import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Work() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ padding: "10px" }}>
          <Col>
            <h1
              style={{
                paddingBottom: "40px",
                textAlign: "center",
                paddingTop: "30px",
              }}
            >
              Work <strong className="purple">Experience</strong>
            </h1>
            <div>
              <h2
                style={{
                  textAlign: "left",
                  paddingLeft: "100px",
                }}
              >
                <b>RIDECELL</b>
                <br />
                <span
                  style={{
                    fontSize: "1.5rem",
                    //   paddingLeft: '20px'
                  }}
                >
                  - Frontend Developer ( June 2022 - Ongoing ) <br />
                  - Frontend Developer Intern ( Dec 2021 - May 2022 ) <br />
                </span>
              </h2>
              <ul
                style={{
                  textAlign: "left",
                  paddingLeft: "110px",
                  paddingTop: "10px",
                  fontSize: "1.1rem",
                  lineHeight: "2",
                }}
              >
                Worked on five major features based on the client's
                requirements, resulting in improved user experience. Assisted
                senior Front End Developers in designing web applications and
                gained skills in aligning designs with client requirements{" "}
                Communicated with back-end developers for any front-end
                problematic issues. Worked with teams of IT professionals to
                meet team goals and business objectives
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
