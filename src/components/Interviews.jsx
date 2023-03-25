import styled from "styled-components";
import { Element } from "react-scroll";
// Data
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { Carousel } from 'react-bootstrap';
import { useState } from "react";

const StyledInterview = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;
const items = [
  {
    id: 1,
    src: 'https://via.placeholder.com/800x400/000000/FFFFFF?text=Image+1',
    alt: 'Interviews 1',
    caption: 'Interviews 1 caption',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/800x400/FFFFFF/000000?text=Image+2',
    alt: 'Interviews 2',
    caption: 'Interviews 2 caption',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/800x400/000000/FFFFFF?text=Image+3',
    alt: 'Interviews 3',
    caption: 'Interviews 3 caption',
  },
];
export default function Interviews() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Element name={"Interviews"} id="interviews">
      <StyledInterview className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>My Interviews</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Carousel interval={3000}
            activeIndex={index} onSelect={handleSelect}>
            {items.map((item) => (
              <Carousel.Item key={item.id}>
                <img className="d-block w-100" src={item.src} alt={item.alt} />
                <Carousel.Caption>
                  <h3>{item.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </StyledInterview>
    </Element>
  );
}
