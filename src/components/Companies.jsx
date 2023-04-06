import { Element } from "react-scroll";
import styled from "styled-components";
// Data
import { Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import company1 from "../images/comp1.png";
import company2 from "../images/comp2.png";
import company3 from "../images/comp3.png";
import company4 from "../images/comp4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const StyledCompanies = styled.section
  `  p {
    font-size: 1.25rem;
  }
  .img {
    width: 22rem;
    height: 18rem;
  }
  h2{
    font-weight: 700;
    font-size: 64px;
    line-height: 82px;
    text-align: center;
    color: #000000;
    margin-top:100px;
    margin-bottom:30px;
  }
  .company_card{
    width: 282px;
    height: 160.43px;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .company_card img{
    width: 205px;
    height: 56px;
  }
  .react-multiple-carousel__arrow--left , .react-multiple-carousel__arrow{
    display:none
  }
  .react-multi-carousel-dot--active button{
    background:#5300CE;
  }
  .react-multi-carousel-dot button{
    width: 37px;
    height: 15px;        
    border-radius: 10px;
    margin-right:10px;
    border:none;
  }
  @media screen and (max-width: 1083px) {
    h2{
      font-size:50px
    }
  }
  @media screen and (max-width: 993px) {
    .company_card {
      width: 225px;
      height: 125.43px;}
      .company_card img {
        width: 179px;
        height: 37px;
    }
  }
  @media screen and (max-width: 767px) {
    h2{
      font-size:36px;
      line-height: 52px;
      margin-top: 30px;
    }
    .company_card img {
      width: 109px;
      height: 27px;
  }
  .company_card {
    width: 140px;
    height: 75.43px;
}
.react-multi-carousel-dot button{
  width: 27px;
  height: 10px;        
  border-radius: 10px;
  margin-right:10px;
  border:none;
}
}
@media screen and (max-width: 576px) {
  .corusel_row{
    width:520px
  }
}
@media screen and (max-width: 520px) {
  .corusel_row{
    width:480px
  }
}
@media screen and (max-width: 485px) {
  .corusel_row{
    width:420px;
  }
  .company_card {
    width: 122px;
    height: 65.43px;
}
h2 {
  font-size: 27px;
  line-height: 52px;
  margin-top: -59px;
}
.company_card img {
  width: 100px;
  height: 23px;
}
}
@media screen and (max-width: 440px) {
  .corusel_row{
    width:380px;
  }}
@media screen and (max-width: 400px) {
  .corusel_row{
    width:350px;
  }
  .company_card {
    width: 102px;
    height: 60px;
}
.company_card img {
  width: 90px;
  height: 20px;
}
}
`;
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
export default function Companies() {
  return (
    <Element name={"Companies"} id="companies">
      <StyledCompanies className="section">
        <Container className="text-center">
          <Title>
            <h2 className="mb-5">The companies I worked for</h2>
          </Title>
          <Row className="mt-3 align-items-center corusel_row" >
            <Carousel showDots={true} responsive={responsive}>
              <div className="company_card">
                <img className="product--image" src={company4} alt="product" />
              </div>
              <div className="company_card">
                <img className="product--image" src={company1} alt="product" />
              </div>
              <div className="company_card">
                <img className="product--image" src={company2} alt="product" />
              </div>
              <div className="company_card">
                <img className="product--image" src={company4} alt="product" />
              </div>
              <div className="company_card">
                <img className="product--image" src={company3} alt="product" />
              </div>
              <div className="company_card">
                <img className="product--image" src={company4} alt="product" />
              </div>
            </Carousel>
          </Row>

        </Container>
      </StyledCompanies>
    </Element>
  );
}
