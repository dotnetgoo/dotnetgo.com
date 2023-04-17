import { Container } from "react-bootstrap";
import { Element } from "react-scroll";
import styled from "styled-components";
import Logo from "../images/footer_logo.png";
import NameImg from "../images/footer_name.png";
import { FaGithub, FaTelegram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
// Components
import { specialLinks } from "../data";
const StyledFooter = styled.footer`
background: #000000;
height: 245px;
  a {
    color: #fbfdff;
  }
  .footer_cont{
    justify-content: space-between;
    display: flex;
    flex-direction:row;
  }
  .link_icons{
    color:#000000;
    font-size:1rem;
    margin-right:21px;
    margin-bottom:14px;
    transition:all 0.2s;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    width: 32px;
    height: 32px;
    background: #FFFFFF;
    box-shadow: 0px 15px 55px rgba(0, 0, 0, 0.01);
    border-radius: 50px;
  }
  .link_icons:hover{
    color:#fff
    background:#5300CE
  }
  .footer_cont{
    padding-top:100px;
  }

  @media screen and (max-width:456px) {
    .footer_cont{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 60px;
      }
      .icon_cont{
        margin-top: 24px;
      }
      height: 185px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter >
      <Element name={"Footer"} id="footer" className="footer_sec ">
        <Container>
          <div className="footer_cont" xs={2} md={2} lg={3} >
            <div style={{ display: "flex" }}>
              <img
                alt="React Logo"
                src={Logo}
                width="40"
                height="40"
              />
              <img
                alt="React Logo"
                src={NameImg}
                width="120"
                height="40"
                style={{ marginLeft: "8px" }}
              />
            </div>
            <div className="d-flex align-items-center icon_cont">
              <a
                href={specialLinks.telegram}
                aria-label="Check out my GitHub profile."
                className="link_icons"
              >
                <FaTelegram />
              </a>
              <a
                href={specialLinks.gitHub}
                aria-label="Check out my GitHub profile."
                className="link_icons"
              >
                <FaGithub />
              </a>
              <a
                href={specialLinks.linkedin}
                aria-label="Check out my GitHub profile."
                className="link_icons"
              >
                <FaLinkedin />
              </a>
              <a
                href={specialLinks.youTube}
                aria-label="Check out my GitHub profile."
                className="link_icons"
              >
                <FaYoutube />
              </a>
              <a
                href={specialLinks.twitter}
                aria-label="Check out my GitHub profile."
                className="link_icons"
              >
                <FaTwitter />
              </a>
            </div>

          </div>
        </Container>
      </Element>
    </StyledFooter>

  );
}
