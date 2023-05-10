import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Divyakarn Shukla </span>
            from <span className="purple"> Bhopal, India.</span>
            <br />I have completed my bachelors in Computer Science for PEOPLES, Bhopal
            <br />
            <br />I have worked on multiple live projects, and  currently working as a Frontend Developer
            <br />
            <br />
           
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going on Rides
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make it work, make it right, make it fast."{" "}
          </p>
          <footer className="blockquote-footer">Divyakarn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
