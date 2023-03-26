import styled from "styled-components";
import { Element } from "react-scroll";
// Data
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { recommendationsData } from "../data";
const StyledInterview = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;
export default function Recommendations() {
  return (
    <Element name={"Recommendations"} id="recommendations">
      <StyledInterview className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>My Recommendations</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {recommendationsData.map(element => {
            return (
              <div className="mb-5" key={element.id}>
                <h3>{element.title}</h3>
                <p>{element.description}</p>
              </div>
            )
          })}
        </Container>
      </StyledInterview>
    </Element>
  );
}
