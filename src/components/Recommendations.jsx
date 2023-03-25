import styled from "styled-components";
import { Element } from "react-scroll";
// Data
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

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
          <div className="mb-5">
            <h3>Recommendations 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam quaerat officia tenetur aut, temporibus eum sit, Nihil voluptates porro molestiae atque in officia? quia animi maxime eos, pariatur hic. Nihil voluptates porro molestiae atque in officia?</p>
          </div>
          <div className="mb-5">
            <h3>Recommendations 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam quaerat officia tenetur aut, temporibus eum sit, quia animi maxime eos, pariatur hic. Nihil voluptates porro molestiae atque in officia?</p>
          </div>
          <div className="mb-5">
            <h3>Recommendations 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam quaerat officia tenetur aut, temporibus eum sit, quia animi maxime eos, pariatur hic.</p>
          </div>
        </Container>
      </StyledInterview>
    </Element>
  );
}
