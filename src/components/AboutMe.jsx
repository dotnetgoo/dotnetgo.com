import styled from "styled-components";
import { Element } from "react-scroll";
import Logo from "../images/boss_img2.jpg";
import { Col, Container } from "react-bootstrap";
import bg from '../images/red.png';
// data
import { aboutData } from "../data";


const StyledHero = styled.header`
.about_sec{
  display:flex;
}
  .about_title {
    font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 46px;
color: #000000;
  } 
  h4{
    font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 40px;  
background: linear-gradient(90.19deg, #5300CE -2.98%, #FFB802 103.18%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
  }
h6{
    width: 625px;
    height: 64px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 32px;
    margin-top:32px
  }
  .follow_title{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
    margin-right:25px;
  }
  .link_icons{
    color:#000;
    font-size:1rem;
    margin-right:21px;
    margin-bottom:14px;
    transition:all 0.2s;
  }
  .link_icons:hover{
    color:#5300CE
  }
  .draw{
    width: 80px;
    height: 2px;
    background: #000000;
    margin-right:18px;
  }
  .icon_cont{
    margin-top:152px
  }
  .about_img{
    width: 449.43px;
    height: 449.43px;
    border-radius: 500px;
  }
  .about_cont{
    position:relative;
  }
  .about_bg{
    position:absolute;
    top: 500px;
    right:0;
    width: 587px;
   height: 587px;
  }
  .about_img_cont{
    border-radius:50%;
    margin-top: 224px;
    margin-right:30px;
    width: 480px;
    height:  480px;
    background:red;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #6C26D4, #DDCFF2);
  }
  @media screen and (max-width: 1331px) {
    .about_img {
      width: 380.43px;
      height: 380.43px;}
      .about_img_cont {
        width: 405px;
        height: 405px;
        margin-top: 164px;
      }
      h6 {
        line-height: 30px;
        margin-top: 5px;
    }
  }
  @media screen and (max-width: 1083px) {
    .about_img {
      width: 330.43px;
      height: 330.43px;}
      .about_img_cont {
        width: 355px;
        height: 355px;
        margin-top: 164px;
      }
      h6 {
        line-height: 30px;
        margin-top: 5px;
    }
    .about_title{
      font-size: 32px;
      line-height: 30px;
      margin-top: 11px;
      }
      h4 {
        line-height: 30px;
        width: 425px;
        font-size: 20px;
        margin-top: 10px;
    }
      h6 {
        width: 425px;
        margin-top: 5px;
        font-size: 13px;
        line-height: 20px;
    }
  }
  @media screen and (max-width: 965px) {
    .about_img{
      width: 229.43px;
      height: 229.43px;
      border-radius: 500px;
    }
    .about_img_cont{
      border-radius:50%;
      width: 250px;
      height: 250px;
      background:red;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to bottom, #6C26D4, #DDCFF2);
  }
  @media screen and (max-width: 767px) {
    .about_sec{
      flex-direction:column;
      flex-direction: column-reverse;
    }
    .about_parags{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .about_img_cont {
      margin-top: 21px;
    }
    .about_title{
      margin:16px 0;
    }
    .a_img_cont{
      margin-top:110px
    }
      }
      @media screen and (max-width:550px) {
        .about_bg{
          width: 345px;
          height: 300px;
        }
      }
      @media screen and (max-width:456px) {
        h4 {
          line-height: 26px;
          width: 357px;
          font-size: 18px;}
          h6 {
            width: 345px;
            font-size: 12px;}
            .about_img_cont {
              margin-top: 67px;
          }
      }
      @media screen and (max-width:380px) {
        h4 {
          line-height: 26px;
          width: 327px;
          font-size: 18px;}
          h6 {
            width: 325px;
            font-size: 12px;}
            .about_img_cont {
              margin-top: 67px;
          }
      }
`;
export default function AboutMe() {
  return (

    <Element name={"About"} id="about">
      <StyledHero className="about_cont">
        <img src={bg} className="about_bg" alt="" />
        <Container >
          <div className="align-items-center about_sec">
            <Col className="a_img_cont">
              <div className="about_img_cont">
                <img
                  src={Logo}
                  alt="React Logo"
                  className="about_img"
                />
              </div>
            </Col>
            <Col className="about_parags">
              <h1 className="display-3 title about_title">About</h1>
              <h4>{aboutData.title}</h4>
              <h6>{aboutData.description}</h6>
            </Col>
          </div>
        </Container>
      </StyledHero>
    </Element>
  );
}
