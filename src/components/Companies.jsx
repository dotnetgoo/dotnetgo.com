import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import company1 from "../images/comp1.jpg";
import company2 from "../images/comp2.jpg";
import company3 from "../images/comp3.jpg";
import company4 from "../images/comp4.jpg";
import company5 from "../images/comp5.jpg";
import company6 from "../images/Microsoft.png";

export default function Companies() {
  const { theme } = useAppContext();
  return (
    <Element name={"Companies"} id="companies">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>The companies I worked for</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-4">
                  <a href={skills.link} target="_blank" rel="noopener noreferrer" style={{ textDecaration: "none" }}>
                    <figure>
                      <img src={skills.id === 1 ? company1 : skills.id === 2 ? company2 : skills.id === 3 ? company3 : skills.id === 4 ? company4 : skills.id === 5 ? company5 : company6} alt="" width="120px" height="100px" />
                      <p className="mt-2" style={{}}>{skills.name}</p>
                    </figure>
                  </a>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
