
import styled from "styled-components";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import tech1 from "../images/tech1.jpg";
import tech2 from "../images/tech2.jpg";
import tech3 from "../images/tech3.jpg";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Teachers() {
  return (
    <Element name={"Teachers"} id="teachers">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title >
              <h2>My Teachers</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5 mb-5">
            <Col className="d-flex flex-column ">
              <Container>
                <p><b>DJ Makhkamov </b> <br /> CTO at BARQ, M.Sc. ex Amazon. HIRING NOW</p>
                {moreInfo && <p>Hello, everyone! I know, it's hard to pronounce, so I go by DJ. I am Customer Experience obsessed IT professional from Dubai. I started coding things about 13 years ago. For the last 6 years, I code less and take care more of managerial tasks. I miss coding and still do it once in a while. </p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={tech1}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-none d-md-block text-center">
              <img
                src={tech2}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
            <Col className="d-flex flex-column ">
              <Container>
                <p><b>Nuriddin Kamardinov </b> <br /> <p>Backend developer</p></p>
                {moreInfo && <p>Experienced Web Developer with a demonstrated history of working in the information technology and services industry. Skilled in PHP, Linux System Administration, Communication, Event Management, and Teamwork. Strong engineering professional with a Bachelor's degree focused in Computer Software Engineering from Tashkent University of Information Technologies named after Muhammad al-Khwarazmi. </p>}
              </Container>
            </Col>
          </Row>
          <Row className="align-items-center mt-5 mb-5">
            <Col className="d-flex flex-column ">
              <Container>
                <p><b>Zarif Zafarovich</b></p>
                {moreInfo && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde ab error nulla modi cumque! Nisi aut quaerat, pariatur blanditiis nihil, eligendi, voluptate vitae doloribus eius animi voluptatum debitis?</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={tech3}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
