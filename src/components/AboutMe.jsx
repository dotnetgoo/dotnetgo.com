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
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column ">
              <Container>
                <p><b>Microsoft MVP | Software Engineer @ BARQ App | Lead Teacher</b></p>
                {moreInfo && <p>Microsoft MVP, Software Engineer, Instructor, Singer, Founder of .NET Community in Uzbekistan, Ibn Sina Enthusiast.

                  The biggest programmer ever is the Allah. He created software called "Life" and it is the most perfect software. Every part of this software works on realtime communication. This software also has an instruction - Koran. A person, who knows Koran will never struggle using the software "Life".

                  In other words, life itself is like a programming. The life i told about has a lots of paths, but goals are the same. And I am on the best of these paths. So in .NET ...</p>}
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
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
