import { Element } from "react-scroll";
import styled from "styled-components";
// data
import { companyData, images } from "../data";
import { Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
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
    width: 90%;
    height: 160.43px;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product--image{
    width: 205px;
    height: 50px;
    
  }
  .uzcard--image{
    height: 111px;
    width: 157px;
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
  .react-multi-carousel-track{
    margin-bottom: 34px;
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
      .product--image{
        width: 179px;
        height: 37px;
    }
    .uzcard--image{
      height: 95px;
      width: 140px;
    }
  }
  @media screen and (max-width: 767px) {
    h2{
      font-size:36px;
      line-height: 52px;
      margin-top: 30px;
    }
    .product--image {
      width: 109px;
      height: 27px;
  }
  .uzcard--image{
    width: 80px;
    height: 45px;
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
}
.product--image {
  width: 100px;
  height: 23px;
}
.uzcard--image{
  width: 76px;
  height: 40px;
}
}
@media screen and (max-width: 440px) {
  .corusel_row{
    width:380px;
  }
  .section{
    min-height: 79vh;
  }
}
@media screen and (max-width: 400px) {
  .corusel_row{
    width:350px;
  }
  .company_card {
    width: 102px;
    height: 60px;
}
.product--image{
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
            <h2 className="mb-5">Companies</h2>
          </Title>
          <Row className="mt-3 align-items-center corusel_row" >
            <Carousel showDots={true} responsive={responsive}>
              {companyData.map(element => {
                return (
                  <a href={element.link} style={{ textDecoration: "none" }} target="blank" key={element}>
                    <div className="company_card">
                      {element.id !== 5 && <img className="product--image" src={element.id === 1 ? images.comp1 : element.id === 2 ? images.comp2 : element.id === 3 ? images.comp3 : images.comp4} alt="product" />}
                      {element.id === 5 && <img className="uzcard--image" src={images.comp5} alt="product" />}
                    </div>
                  </a>
                )
              })}

            </Carousel>
          </Row>

        </Container>
      </StyledCompanies>
    </Element>
  );
}
