
import styled from "styled-components";
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import tech1 from "../images/tech1.jpg";
import tech2 from "../images/tech2.jpg";
import tech3 from "../images/tech3.jpg";
import { teachersData } from "../data";
import Light from "../images/bg-about.jpg";
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
          {
            teachersData.map(element => {
              return (
                element.id % 2 !== 1 ?
                  <Row className="align-items-center mt-5 mb-5" key={element.id} xs={1} md={2} lg={2} >
                    <Col className="d-flex flex-column " >
                      <Container>
                        <p><b>{element.name}</b> <br />{element.skills}</p>
                        <p>{element.description}</p>
                      </Container>
                    </Col>
                    <Col className=" d-md-block text-center">
                      <img
                        src={element.id === 1 ? tech1 : element.id === 2 ? tech2 : tech3}
                        alt="GitHub Avatar"
                        loading="lazy"
                        className="mx-auto rounded-circle"
                        style={{ width: "15rem", height: "15rem" }}
                      />
                    </Col>
                  </Row> : <Row className="align-items-center mt-5 mb-5" key={element.id} xs={1} md={2} lg={2} >
                    <Col className=" d-md-block text-center">
                      <img
                        src={element.id === 1 ? tech1 : element.id === 2 ? tech2 : tech3}
                        alt="GitHub Avatar"
                        loading="lazy"
                        className="mx-auto rounded-circle"
                        style={{ width: "15rem", height: "15rem" }}
                      />
                    </Col>
                    <Col className="d-flex flex-column ">
                      <Container>
                        <p><b>{element.name}</b> <br />{element.skills}</p>
                        <p>{element.description}</p>
                      </Container>
                    </Col>
                  </Row>
              )
            })
          }

        </Container>
      </StyledAboutMe>
    </Element>
  );
}
