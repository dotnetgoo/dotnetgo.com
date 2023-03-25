
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
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
`;

export default function Teachers() {
  const { avatar_url } = useSelector(selectData);
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
                <p><b>Teacher's name</b></p>
                {moreInfo && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde ab error nulla modi cumque! Nisi aut quaerat, pariatur blanditiis nihil, eligendi, voluptate vitae doloribus eius animi voluptatum debitis?</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
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
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
            <Col className="d-flex flex-column ">
              <Container>
                <p><b>Teacher's name</b></p>
                {moreInfo && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde ab error nulla modi cumque! Nisi aut quaerat, pariatur blanditiis nihil, eligendi, voluptate vitae doloribus eius animi voluptatum debitis?</p>}
              </Container>
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
