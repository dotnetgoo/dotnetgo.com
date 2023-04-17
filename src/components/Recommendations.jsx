import styled from "styled-components";
import { Element } from "react-scroll";
// Data
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { recommendationsData } from "../data";
import bg from '../images/blue2.png';
const StyledInterview = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
  .recc_cont{
    display: flex;
    flex-direction:row;
    justify-content: center;
  }
  .rec_card{
    box-sizing: border-box;    
    width: 364px;
    height: auto;
    background: rgba(255, 255, 255, 0.79);
    border-radius: 15px;
    margin-right:14px;
    margin-top:24px;
    padding:24px;
    border:1px solid #9562E1;
    z-index:300;
    transition: transform 300ms ease-in-out;
  }
  .rec_card:hover{
    transform:scale(1.03);
  }
  .rec_card h3{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: rgb(0, 0, 0);
    margin-bottom:10px;
  }
  .rec_card h4{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgb(0, 0, 0);
  }
  h2{
    font-weight: 700;
    font-size: 64px;
    line-height: 82px;
    text-align: center;
    margin-bottom:47px;
    margin:90px 0;
  }
  .rec_card p{
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: rgb(0, 0, 0);
    margin-top:13px;
  }
  .rec_bg{
    position:absolute;
    top: 3700px;
    left:0;
    width: 587px;
   height: 587px;
  }
  .rec_section{
    position:relative;
  }
  @media screen and (max-width: 1083px) {
    h2{
      font-size:50px
    }
    .rec_card{
      width: 300px;
      background: rgb(255, 255, 255);
      border-radius: 15px;
      margin-right:14px;
      margin-top:24px;
    }
    .rec_card h3{
       font-size: 20px;
       margin-top:6px;
    }
    .rec_card h4{
       font-size: 14px;
       margin-top:6px;
    }
  }
  @media screen and (max-width: 767px) {
    h2{
      font-size:40px
    }
    .rec_card {
      width: 234px;
      margin-right: 14px;
      margin-top: 24px;
  }
  .rec_card h3 {
    font-size: 18px;
    line-height: 18px;
  }
  .rec_card h4 {
    font-size: 13px;
    line-height: 19px;
  }
  .rec_card p {
    font-size: 14px;
    margin-top: 7px;
}
  }
  @media screen and (max-width:612px) {
    .rec_bg{
      top: 3100px;
      width: 345px;
      height: 300px;
    }
  }
  @media screen and (max-width: 767px) {
    .recc_cont{
      display: flex;
      flex-direction:column;
      justify-content: center;
    }
  @media screen and (max-width:485px) {
    h2{
      margin:10px 0;
      font-size:27px;
    }
  }
`;
export default function Recommendations() {
  return (
    <Element name={"Recommendations"} id="recommendations">
      <StyledInterview className="section rec_section">
        <img src={bg} alt="" className='rec_bg' />
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Recommendations</h2>
            </Title>
          </Container>
          <div className="align-items-center recc_cont" >
            {recommendationsData.map(element => {
              return (
                <div className="rec_card" key={element.id}>
                  <h3>{element.title}</h3>
                  <h4>{element.description}</h4>
                  <p>Learn More</p>
                </div>
              )
            })}
          </div>
        </Container>
      </StyledInterview>
    </Element>
  );
}
