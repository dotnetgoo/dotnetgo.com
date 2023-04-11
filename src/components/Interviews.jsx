
import styled from "styled-components";
import { Element } from "react-scroll";
// data
import { interviewData, images } from "../data";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { useState } from "react";
import bg from '../images/blue2.png';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Polygon from '../images/play.jpg';
const StyledInterview = styled.section`
  p {
    font-size: 1.25rem;
  }
  .section{
    margin-top:120px
  }
  iframe {
    width: 18rem;
    height: 30rem;
  }
 h2{
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 82px;
  color: #000000;
  margin-top:130px;
 }
    .inter_cont{
      position:relative;
    }
    .inter_bg{
      position:absolute;
      top: 1582px;
      left:0;
      width: 587px;
     height: 727px;
     z-index:-100;
    }
    .interview_card{
      position:absolute;
      top:0;
      left:80px;
      width: 964px;
      height: 514px;
      background: url(${images.interview});
      border-radius: 30px;
      z-index:10;
      transition: transform 150ms ease-in-out;
      transform: scale(0.7);
      background-position: center;
      background-size: cover; 
      }
    .interview_card_1{
      position:absolute;
      top:0;
      left:80px;
      width: 964px;
      height: 514px;
      background: url(${images.interview2});
      border-radius: 30px;
      z-index:9;
      transition: transform 150ms ease-in-out;
      transform: scale(0.7);
      background-position: center;
      background-size: cover; 
      }
    .interview_card_2{
      position:absolute;
      top:0;
      left:80px;
      width: 964px;
      height: 514px;
      background: url(${images.intervie3});
      border-radius: 30px;
      z-index:9;
      transition: transform 150ms ease-in-out;
      transform: scale(0.7);
      background-position: center;
      background-size: cover; 
      }
      .main_cont{
     position:relative       
      }
      .clickers{
        display:flex;
        justify-content:center;
        margin-top:590px;
      }
      .clicker{
        width: 37px;
        height: 15px;        
        border-radius: 10px;
        margin-right:10px;
      }
      .card_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px;
        position: absolute;
        width: 415px;
        height: 220px;
        left: 49px;
        top: 260px;
        background: rgba(18, 18, 18, 0.31);
        backdrop-filter: blur(14px);
        border-radius: 15px;
        padding-left:30px
      }
      .card_info h4{
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        color: #FFFFFF;
      }
      .card_info h5{
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        color: #FFFFFF;
      }
      .play_video{
        display:flex;
      }
      .play_video p{
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        color: #FFFFFF;
        margin-top: 4px;
        margin-left: 11px;
      }
      .play_cont img{
        width: 34px;
        height: 34px;
        border-radius: 50%;
        cursor:pointer;
      }
      .interview_icon{
        position:absolute;
        font-size:50px;
        cursor:pointer;
        top:220px;
        color:red;
      }
      .next_icon{
       right:0px;
      }
      .prev_icon{
      left:0;
      }
      @media screen and (min-width:1400px) {
        .interview_card, .interview_card_1,  .interview_card_2{
          left: 185px
          height: 414px;
          }
    }
      @media screen and (max-width: 1331px) {
        .interview_card, .interview_card_1,  .interview_card_2{
          left:190px;
          width: 764px;
          height: 414px;
          border-radius: 30px;
          }
          .card_info{
            width: 315px;
            height: 180px;
            left: 49px;
            top: 200px;
            padding-left:30px
          }
          .card_info h4{
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
          }
          .card_info h5{
            font-size: 14px;
            line-height: 32px;
          }
          .play_video p{
            font-size: 12px;
            line-height: 32px;
            margin-top: 1px;
            margin-left: 11px;
          }
          .play_cont img{
            width: 30.63px;
            height: 30.8px;
          }
          .clickers {
            margin-top: 504px;
        }
      }
      @media screen and (max-width: 1331px) {
        .interview_card, .interview_card_1,  .interview_card_2{
          left:80px;
          width: 764px;
          height: 414px;
          border-radius: 30px;
          }

      }
      @media screen and (max-width: 1083px) {
        .interview_card , .interview_card_2, .interview_card_3{
          left:100px;
          width: 764px;
          height: 414px;
          border-radius: 30px;
          }
          .card_info{
            width: 315px;
            height: 180px;
            left: 49px;
            top: 200px;
            padding-left:30px
          }
          .card_info h4{
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
          }
          .card_info h5{
            font-size: 14px;
            line-height: 32px;
          }
          .play_video p{
            font-size: 12px;
            line-height: 32px;
            margin-top: 1px;
            margin-left: 11px;
          }
          .play_cont img{
            width: 30.63px;
            height: 30.8px;
          }
          .clickers {
            margin-top: 504px;
        }
        h2{
          font-size:50px
        }
      }
      @media screen and (max-width: 993px) {
        .interview_card, .interview_card_1,.interview_card_2{
          left:10px;
          width: 664px;
          height: 354px;
          border-radius: 30px;
          }
          .card_info{
            width: 315px;
            height: 180px;
            left: 49px;
            top: 150px;
            padding-left:30px
          }
          .clickers {
            margin-top: 427px;
        }
        .interview_icon{
          top:160px;
        }
        .prev_icon{
          left:-50px;
        }
        .next_icon {
          right: -34px;
      }
      }
      @media screen and (max-width: 767px) {
        h2{
          font-size:40px;
          margin-top:40px;
        }
        .interview_card, .interview_card_1,.interview_card_2{
          left:30px;
          width: 464px;
          height: 254px;
          border-radius: 20px;
          }
          .card_info{
            width: 265px;
            height: 110px;
            left: 29px;
            top: 100px;
            padding-left:30px
          }
          .card_info h4{
            font-weight: 700;
            font-size: 12px;
            line-height: 26px;
          }
          .card_info h5{
            font-size: 10px;
            line-height: 32px;
          }
          .play_cont img{
            width: 30.63px;
            height: 30.8px;
          }
          .clickers {
            margin-top: 317px;
        }
        .clicker{
          width: 27px;
          height: 10px;        
          border-radius: 10px;
          margin-right:10px;
          border:none;
        }
        .interview_icon{
          top:120px;
          font-size:40px;
        }
        .prev_icon{
          left:-16px;
        }
        .next_icon {
          right: -24px;
      }
      }
     
      @media screen and (max-width:585px) {
        .inter_bg{
          width: 345px;
          height: 300px;
        }
        .interview_card, .interview_card_1,.interview_card_2{
          left:45px;
          width: 424px;
          height: 234px;
          border-radius: 20px;
          }
          h2{
            font-size:30px;
          }
          .card_info h5 {
            font-size: 10px;
            line-height: 5px;
        }

        .interview_icon{
          top:100px;
          font-size:30px;
        }
        .prev_icon{
          left:-6px;
        }
        .next_icon {
          right: -6px;
      }
      }
      @media screen and (max-width: 476px) {
        h2{
          font-size:30px;
          margin-top:0px;
        }
        .interview_card, .interview_card_1,.interview_card_2{
          left:40px;
          width: 364px;
          height: 214px;
          border-radius: 20px;
          }
          .card_info{
            width: 265px;
            height: 110px;
            left: 29px;
            top: 80px;
            padding-left:30px
          }
          .interview_icon{
            top:100px;
            font-size:30px;
          }
          .prev_icon{
            left:-16px;
          }
          .next_icon {
            right: -10px;
        }
        }
        @media screen and (max-width:456px) {
          .interview_card, .interview_card_1,.interview_card_2{
            left:28px;
            }
        }
        @media screen and (max-width:436px) {
          .interview_card, .interview_card_1,.interview_card_2{
            left:30px;
            width: 314px;
            height: 190px;
            }
            .card_info{
              width: 255px;
              height: 110px;
              left: 29px;
              top: 70px;
              padding-left:30px
            }
        }
      @media screen and (max-width: 607px) {
        h2{
          font-size:30px;
          margin-top:40px;
        }
        .interview_card, .interview_card_1,.interview_card_2{
          left:20px;
          width: 324px;
          height: 200px;
          border-radius: 25px;
          }
          .card_info{
            width: 175px;
            height: 90px;
            left: 21px;
            top: 92px;
            padding-left:10px
          }
          .card_info h4{
            font-weight: 700;
            font-size: 8px;
            line-height: 9px;
          }
          .card_info h5{
            font-size: 8px;
            line-height: 0px;
          }
          .play_cont {
            width: 6px;
            height: 6px;
          }
          .play_cont img {
            width: 20px;
            height: 20px;
        }
        .card_info p {
          font-size: 8px;
          line-height: 0px;
          margin-left: 20px;
          margin-top: 12px;
      }
          .clickers {
            margin-top: 267px;
        }
        .clicker{
          width: 27px;
          height: 10px;        
          border-radius: 10px;
          margin-right:10px;
          border:none;
        }
        }
        @media screen and (max-width:386px) {
          .interview_card, .interview_card_1,.interview_card_2{
            left:20px;
            width: 300px;
            height: 204px;
            border-radius: 25px;
            }
        }
        @media screen and (min-width:1400px) {
          .interview_card{
            left: 185px
            }
          .interview_card_1{
            left: 185px
            }
          .interview_card_2{
            left: 185px
            }
      }

`;
export default function Interviews() {
  const [index, setIndex] = useState(0);
  const clickPrev = () => {
    switch (index) {
      case 0: setIndex(2); break;
      case 1: setIndex(0); break;
      case 2: setIndex(1); break;
      default: break;
    }
  }
  const clickNext = () => {
    switch (index) {
      case 0: setIndex(1); break;
      case 1: setIndex(2); break;
      case 2: setIndex(0); break;
      default: break;
    }
  }
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Element name={"Interviews"} id="interviews">
      <StyledInterview className="section inter_cont">
        <img src={bg} alt="" className='inter_bg' />
        <Container>
          <Container className="d-flex mb-5">
            <Title>
              <h2>Interviews</h2>
            </Title>
          </Container>
          <div className="main_cont">
            <div className="interview_card" style={{ transform: index === 0 ? "scale(1)" : "scale(0.7)", zIndex: index === 0 ? 10 : 9, }}>
              <div className="card_info">
                <h4>{interviewData[0].title}</h4>
                <h5>{interviewData[0].name}</h5>
                <a href={interviewData[0].link} target="blank" style={{ textDecoration: "none" }}>
                  <div className="play_video">
                    <div className="play_cont">
                      <img src={Polygon} alt="" />
                    </div>
                    <p>Watch video</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="interview_card_1" style={{ transform: index === 1 ? "scale(1)" : "scale(0.7)", zIndex: index === 1 ? 10 : 9, }}>
              <div className="card_info">
                <h4>{interviewData[1].title}</h4>
                <h5>{interviewData[1].name}</h5>
                <a href={interviewData[1].link} target="blank" style={{ textDecoration: "none" }}>
                  <div className="play_video">
                    <div className="play_cont">
                      <img src={Polygon} alt="" />
                    </div>
                    <p>Watch video</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="interview_card_2" style={{ transform: index === 2 ? "scale(1)" : "scale(0.7)", zIndex: index === 2 ? 10 : 9, }}>
              <div className="card_info">
                <h4>{interviewData[2].title}</h4>
                <h5>{interviewData[2].name}</h5>
                <a href={interviewData[2].link} target="blank" style={{ textDecoration: "none" }}>
                  <div className="play_video">
                    <div className="play_cont">
                      <img src={Polygon} alt="" />
                    </div>
                    <p>Watch video</p>
                  </div>
                </a>
              </div>
            </div>
            <GrNext className="next_icon interview_icon" onClick={() => { clickNext() }} />
            <GrPrevious className="prev_icon interview_icon" onClick={() => { clickPrev() }} />
          </div>
          <div className="clickers">
            <div className="clicker" onClick={() => { handleSelect(0) }} style={{ background: index === 0 ? "#5300CE" : "#D4DBE2" }}></div>
            <div className="clicker" onClick={() => { handleSelect(1) }} style={{ background: index === 1 ? "#5300CE" : "#D4DBE2" }}></div>
            <div className="clicker" onClick={() => { handleSelect(2) }} style={{ background: index === 2 ? "#5300CE" : "#D4DBE2" }}></div>
          </div>
        </Container>
      </StyledInterview>
    </Element>
  );
}
