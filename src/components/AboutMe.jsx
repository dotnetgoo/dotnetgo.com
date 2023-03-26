import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { aboutData } from "../data";
import Light from "../images/bg-about.jpg";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
  {
    background: ${({ theme }) => theme.name === "light" ? `linear-gradient(#ebf8e1, #ebf8e1, #ebf8e1), url(${Light}) ` : `linear-gradient(#27272A, #27272A, #ebf8e1)`
  }}
`;

export default function AboutMe() {
  const { avatar_url } = useSelector(selectData);
  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5" xs={1} md={2} lg={2}>
            <Col className="d-flex flex-column ">
              <Container>
                <p><b>{aboutData.title}</b></p>
                <p>{aboutData.description}</p>
              </Container>
            </Col>
            <Col className=" d-md-block text-center">
              <img
                src={avatar_url}
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
