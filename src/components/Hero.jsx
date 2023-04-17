import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import { FaGithub, FaTelegram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import bg from '../images/blue.png';
// data
import { specialLinks, HeroData, images } from "../data";
const StyledHero = styled.header`
  .hero_title {
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 89px;
    color: #000000;
    margin-top:80px
  } 
  .hero_bg{
    position:absolute;
    top:0;
    left:0;
    width: 587px;
   height: 587px;
   z-index:-100;
  }
  h4{
    width: 625px;
    height: 62px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
    margin-top:60px
  }
h6{
    width: 625px;
    height: 64px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 32px;
    margin-top:32px;
    color:rgb(25, 6, 73);
  }
  .follow_title{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #000;
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
    background: #000;
    color:#000;
    margin-right:18px;
  }
  .icon_cont{
    margin-top:152px
  }
  .hero_img{
    width: 449.43px;
    height: 449.43px;
    border-radius: 500px;
  }
  .img_cont{
    border-radius:50%;
    width: 470px;
    height:  470px;
    background:red;
    margin-left:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #6C26D4, #DDCFF2);
  }
  .hero_sec{
    display:flex;
    }
  @media screen and (max-width: 1331px) {
    .hero_title{
    font-size: 42px;
    line-height: 50px;
    margin-top: 31px;
    }
    h4 {
      font-size: 20px;
      margin-top: 10px;
  }
    h6 {
      margin-top: 5px;
      font-size: 13px;
      line-height: 20px;
  }
  .icon_cont {
    margin-top: 24px;
}
.hero_img {
  width: 369.43px;
  height: 369.43px;}
.img_cont {
    width: 395px;
    height: 395px;}
.hero_sec{
    display:flex;
    flex-direction:row
    }
  }
  @media screen and (max-width: 1083px) {
    .hero_title{
    font-size: 32px;
    line-height: 30px;
    margin-top: 11px;
    }
    h4 {
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
  .icon_cont {
    margin-top: 14px;
}
.hero_img {
  width: 340px;
  height: 340px;
}
  .img_cont {
    width: 365px;
    height: 365px;}
  .hero_sec{
    display:flex;
    }
  }
  @media screen and (max-width: 965px) {
    .hero_img{
      width: 229.43px;
      height: 229.43px;
      border-radius: 500px;
    }
    .img_cont{
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
.hero_sec{
  flex-direction:column
}
.hero_cont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.img_cont {
  margin-top: 21px;
}
  }
  @media screen and (max-width:585px) {
  .hero_bg{
    width: 345px;
    height: 300px;
  }
  .hero_cont{
    text-align: center;
  }
  }
  @media screen and (max-width:456px) {
    h1 {
      line-height: 26px;
      width: 357px;
      font-size: 18px;
      color:#000;
    }
    h4 {
      line-height: 26px;
      width: 357px;
      font-size: 18px;
      text-align:center;
      color:#000;
    }
    h6{
        text-align:center;
        width: 345px;
        font-size: 12px;
        color:#000;
      }
        .img_cont {
          margin-top: 57px;
          margin-left:0;
      }
  }
  @media screen and (max-width:400px) {
    .draw{
      width: 35px;
      height: 2px;
      margin-right:12px;
    }
    .follow_title{
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      color: #000;
      margin-right:15px;
    }
    .icon_cont{
      margin-left: 31px;
    }
  }
`;
export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <div className="align-items-center hero_sec">
          <Col className="hero_cont">
            <img src={bg} className="hero_bg" alt="bg" />
            <h1 className="mb-3 display-3 title hero_title">{HeroData.name}</h1>
            <h4>{HeroData.profession}</h4>
            <h6>{HeroData.description}</h6>
            <div className="d-flex align-items-center icon_cont">
              <p className="draw"></p>
              <p className="follow_title">Follow me:</p>
              <a
                href={specialLinks.telegram}
                aria-label="Check out my GitHub profile."
                className="link_icons"
                target="_blank" rel="noreferrer"
              >
                <FaTelegram />
              </a>
              <a
                href={specialLinks.gitHub}
                aria-label="Check out my GitHub profile."
                className="link_icons"
                target="_blank" rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={specialLinks.linkedin}
                aria-label="Check out my GitHub profile."
                className="link_icons"
                target="_blank" rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href={specialLinks.youTube}
                aria-label="Check out my GitHub profile."
                className="link_icons"
                target="_blank" rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href={specialLinks.twitter}
                aria-label="Check out my GitHub profile."
                className="link_icons"
                target="_blank" rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col>
            <div className="img_cont">
              <img
                src={images.hero_img}
                alt="React Logo"
                className="hero_img"
              />
            </div>
          </Col>
        </div>
      </Container>
    </StyledHero>
  );
}
