import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import styled from "styled-components";
// Data
import { companyData, resume } from "../data";
import Light from "../images/bg-about.jpg";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import company1 from "../images/comp1.jpg";
import company2 from "../images/comp2.jpg";
import company3 from "../images/comp3.jpg";
import company4 from "../images/comp4.jpg";
import company5 from "../images/comp5.jpg";
import company6 from "../images/Microsoft.png";
const StyledCompanies = styled.section`  p {
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

export default function Companies() {
  const { theme } = useAppContext();
  return (
    <Element name={"Companies"} id="companies">
      <StyledCompanies className="section">
        <Container className="text-center">
          <Title>
            <h2>The companies I worked for</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center" xs={2} md={2} lg={3} >
            {companyData.map((skills) => {
              return (
                <Col className="my-md-4" key={skills.id} >
                  <a href={skills.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <figure>
                      <img src={skills.id === 1 ? company1 : skills.id === 2 ? company2 : skills.id === 3 ? company3 : skills.id === 4 ? company4 : skills.id === 5 ? company5 : company6} alt="" style={{ width: "8rem", height: "7rem" }} />
                      <p className="mt-2" style={{ color: theme === "light" ? "#013684" : "#fff", textDecoration: "none" }}>{skills.name}</p>
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
      </StyledCompanies>
    </Element>
  );
}
