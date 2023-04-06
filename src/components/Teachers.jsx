
import styled from "styled-components";
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { CloseButton } from 'react-bootstrap';
import { Title } from "./globalStyledComponents";
import tech1 from "../images/tech1.jpg";
import tech2 from "../images/tech2.jpg";
import tech3 from "../images/tech3.jpg";
import { teachersData } from "../data";
import bg from '../images/red.png';
import { useState } from "react";
const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
  .tech_card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    width: 364px;
    height: 394px;
    background: #FFFFFF;
    border-radius: 15px;
    margin-right:14px;
    margin-top:24px;
    z-index:300;
    transition: transform 300ms ease-in-out;
  }
  .tech_card:hover{
    transform:scale(1.03);
  }
  .tech_card img{
    width: 145px;
    height: 145px;
    border-radius: 100px;
  }
  .tech_card h6{
     font-style: normal;
     font-weight: 700;
     font-size: 24px;
     line-height: 31px;
     text-align: center;
     color: #000000;
     margin-top:36px;
  }
   h2{
    font-weight: 700;
    font-size: 64px;
    line-height: 82px;
    text-align: center;
    color: #000000;
    margin:90px 0;
  }
  .tech_card p{   
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #000000;
    margin-top:18px;
  }
  .inter_bg{
    position:absolute;
    top: 2000;
    right:0;
    width: 587px;
   height: 657px;
  }
  .tech_modal img{
    width: 177px;
    height: 177px;
    border-radius: 225px;
    margin-bottom:30px;
  }
  .main_cont{
    position:relative;
  
  }
  .main_cont h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    text-align: center;
    color: #000000;
  }
  .main_cont h4{
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #000000;
  }
  .main_cont p{
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    color: #000000;
  }
  .close_icon{
    position:absolute;
    right:40px;
    top:50px;
  }
  .more_link:hover{
    transform:scale(1.03);
    color:blue;
  }
  .tech_modal{
    position: fixed;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
    width: 720px;
    height: 541px;
    padding: 24px 36px;
    bottom: 0;
    right: 0;
    z-index: 1200;
    background: #FFFFFF;
    box-shadow: -20px 35px 60px rgba(225, 255, 228, 0.25), 10px 35px 60px rgba(83, 0, 206, 0.06);
    border-radius: 12px;
    background-color: #fff;
    float: left;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 1320px) {
    .tech_card{
      padding: 0px 10px;
      width: 354px;
      height: 364px;
      background: #FFFFFF;
      border-radius: 15px;
      margin-right:24px;
      margin-top:24px;
    }
  }
  @media screen and (max-width: 1083px) {
    h2{
      font-size:50px
    }
    .tech_card{
      padding: 0px 10px;
      width: 300px;
      height: 344px;
      background: #FFFFFF;
      border-radius: 15px;
      margin-right:14px;
      margin-top:24px;
    }
    .tech_card img{
      width: 115px;
      height: 115px;
      border-radius: 100px;
    }
    .tech_card h6{
       font-size: 20px;
       margin-top:6px;
    }
    .tech_card p{
       font-size: 16px;
       margin-top:6px;
    }
    .tech_modal {
    width: 620px;
    height: 501px;
    padding: 18px 30px;
    }
  }
  @media screen and (max-width: 767px) {
    h2{
      font-size:40px
    }
    .tech_card {
      width: 255px;
      height: 291px;}
      .tech_card h6 {
        font-size: 16px;
        margin-top: 1px;
      }
      .tech_card p {
        font-size: 14px;
        margin-top: -11px;
      }
      .tech_modal {
        width: 600px;
        height: 481px;
        padding: 18px 30px;
        }
    .tech_modal img {
      width: 166px;
      height: 166px;
      margin-bottom: 9px;
  }
  .main_cont h3 {
    font-size: 22px;
    line-height: 18px;
  }
  .main_cont p {
    font-size: 14px;
    line-height: 20px;
  }
    }
  @media screen and (max-width: 630px) {
    .tech_modal {
      width: 500px;
      height: 401px;
      padding: 18px 30px;
      }
  }
  @media screen and (max-width: 540px) {
.tech_cont{
  display: flex;
  justify-content: center;
}
.tech_modal {
  width: 480px;
  height: 381px;
  padding: 16px 26px;
  }
.tech_modal img {
width: 110px;
height: 110px;
margin-bottom: 9px;
}
.main_cont h3 {
font-size: 18px;
line-height: 18px;
}
.main_cont p {
font-size: 14px;
line-height: 18px;
}
  }
  @media screen and (max-width:480px) {
    h2{
      margin:10px 0;
      font-size:27px;
    }
    .tech_modal {
      width: 380px;
      height: 321px;
      padding: 16px 26px;
      }
    .tech_modal img {
    width: 80px;
    height: 80px;
    margin-bottom: 9px;
    }
    .main_cont h3 {
    font-size: 16px;
    line-height: 14px;
    }
    .main_cont p {
    font-size: 12px;
    line-height: 16px;
    }
    .close_icon{
      right:20px;
      top:20px;
    }
  }
  @media screen and (max-width:410px) {
    h2{
      font-size:27px;
    }
    .tech_modal {
      width: 340px;
      height: 291px;
      padding: 16px 20px;
      }
    .tech_modal img {
    width: 80px;
    height: 80px;
    margin-bottom: 9px;
    }
    .main_cont h3 {
    font-size: 16px;
    line-height: 14px;
    }
    .main_cont p {
    font-size: 12px;
    line-height: 16px;
    }
    .close_icon{
      right:20px;
      top:20px;
    }
  }


`;

export default function Teachers() {
  const [index, setindex] = useState(0)
  return (
    <Element name={"Teachers"} id="teachers">
      <StyledAboutMe className="section">
        <img src={bg} alt="" className='inter_bg' />
        <Container className="main_cont">
          <Container className="d-flex">
            <Title >
              <h2>Teachers</h2>
            </Title>
          </Container>
          <Row className="align-items-center mb-5 tech_cont" xs={2} md={3} lg={3} >
            {
              teachersData.map(element => {
                return (
                  <Col className="text-center tech_card" key={element.id}>
                    <img
                      src={element.id === 1 ? tech1 : element.id === 2 ? tech2 : tech3}
                      alt="GitHub Avatar"
                      loading="lazy"
                      className="mx-auto rounded-circle"
                    />
                    <h6>{element.name}</h6>
                    <p>{element.skills}</p>
                    <p style={{ cursor: "pointer" }} className="more_link" onClick={() => { setindex(element.id) }} >Read More</p>
                  </Col>
                )
              })
            }
          </Row>
          {index === 1 && <div className="tech_modal">
            <CloseButton className="close_icon" onClick={() => { setindex(0) }} />
            <img src={tech1} alt="" />
            <h3>DJ Makhkamov</h3>
            <h4>CTO at BARQ, M.Sc. ex Amazon. HIRING NOW</h4>
            <p>Hello, everyone! I know, it's hard to pronounce, so I go by DJ. I am Customer Experience obsessed IT professional from Dubai. I started coding things about 13 years ago. For the last 6 years, I code less and take care more of managerial tasks. I miss coding and still do it once in a while.</p>
          </div>

          }
          {index === 2 && <div className="tech_modal">
            <CloseButton className="close_icon" onClick={() => { setindex(0) }} />
            <img src={tech2} alt="" />
            <h3>Nuriddin Kamardinov</h3>
            <h4>Backend developer</h4>
            <p>Hello, everyone! I know, it's hard to pronounce, so I go by DJ. I am Customer Experience obsessed IT professional from Dubai. I started coding things about 13 years ago. For the last 6 years, I code less and take care more of managerial tasks. I miss coding and still do it once in a while.</p>
          </div>}
          {index === 3 && <div className="tech_modal">
            <CloseButton className="close_icon" onClick={() => { setindex(0) }} />
            <img src={tech3} alt="" />
            <h3>Zarif Zafarovich</h3>
            <h4>Backend developer</h4>
            <p>Hello, everyone! I know, it's hard to pronounce, so I go by DJ. I am Customer Experience obsessed IT professional from Dubai. I started coding things about 13 years ago. For the last 6 years, I code less and take care more of managerial tasks. I miss coding and still do it once in a while.</p>
          </div>}
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
