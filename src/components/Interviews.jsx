import styled from "styled-components";
import { Element } from "react-scroll";
// Data
import { interviewsData } from "../data";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { Carousel } from 'react-bootstrap';
import { useState } from "react";

const StyledInterview = styled.section`
  p {
    font-size: 1.25rem;
  }
  iframe {
    width: 18rem;
    height: 30rem;
  }
  @media screen and (max-width: 800px) {
    iframe {
      height: 20rem;
    }
    h3{
      font-size:16px
    }
  }
  
   @media screen and (max-width: 400px) {
    iframe {
      height: 14rem;
      font-size:12px
    }
    }
`;
export default function Interviews() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Element name={"Interviews"} id="interviews">
      <StyledInterview className="section">
        <Container>
          <Container className="d-flex mb-5">
            <Title>
              <h2>My Interviews</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Carousel interval={3000}
            activeIndex={index} onSelect={handleSelect}>
            {interviewsData.map((item) => (
              <Carousel.Item key={item.id}>
                <iframe className="d-block w-100 " src={item.src} title={item.caption} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <Carousel.Caption>
                  <h3 style={{ color: "#fff", background: "#000" }}>{item.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </StyledInterview>
    </Element>
  );
}
