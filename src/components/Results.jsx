import styled from "styled-components";
import { Element } from "react-scroll";
// Data
// Components
import { Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
const StyledInterview = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
  h2{
font-weight: 700;
font-size: 64px;
line-height: 82px;
text-align: center;
color: #000000;
margin-bottom:35px;
  }
  .result_card{
    box-sizing: border-box;    
    width: 354px;
    height: 237px;
    margin-right:24px;
    padding:14px;
    margin-right:24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
   
  }
  .result_card h3{
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #000000;    
  }
  .result_card h4{
font-style: normal;
font-weight: 600;
font-size: 120px;
line-height: 153px;
color: #5300CE;
  }
  @media screen and (max-width: 1083px) {
    h2{
      font-size:50px
    }
    .result_card{
      width: 290px;
    }
    .result_card h4{
       font-size: 100px;
       margin-top:6px;
    }
  }
  @media screen and (max-width: 767px) {
    h2{
      font-size:40px
      margin-bottom: 0px;
    }
    .result_card {
      width: 163px;
      height: 237px;
      margin-right: 14px;
      margin-top: 24px;
  }
  .result_card h4 {
    font-size: 71px;}
  }
  @media screen and (max-width: 540px) {
    .res_cont{
      display: flex;
      flex-direction:column;
      justify-content: center;
    }
    @media screen and (max-width:485px) {
      h2{
        font-size: 36px;
      }
      .result_card h3 {
        font-weight: 700;
        font-size: 28px;
        line-height: 1px;
      }
      .result_card{
        margin-bootom:0;
      }
    }
`;
export default function Results() {
  return (
    <Element name={"Recommendations"} id="recommendations">
      <StyledInterview className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Results</h2>
            </Title>
          </Container>
          <Row className="align-items-center res_cont" xs={1} md={2} lg={3} >
            <div className=" result_card">
              <h3>Projects</h3>
              <h4>547</h4>
            </div>
            <div className=" result_card">
              <h3>Partners</h3>
              <h4>584</h4>
            </div>
            <div className=" result_card">
              <h3>Students</h3>
              <h4>358</h4>
            </div>
          </Row>
        </Container>
      </StyledInterview>
    </Element>
  );
}
