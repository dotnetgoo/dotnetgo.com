import { Link } from "react-scroll";
import styled from "styled-components";
import { FaChevronCircleDown } from "react-icons/fa";
import Logo from "../images/logo.png";
import { Light, Dark, Microsoft } from "../data";
import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
    theme.name === "light"
      ? `url(${Microsoft}) top center fixed no-repeat `
      : `url(${Microsoft}) top center fixed no-repeat `};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
    theme.name === "light"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(0, 0, 0, 0.2)"};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  } 
  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
    theme.name === "light"
      ? `url(${Light}) top center fixed no-repeat`
      : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
    theme.name === "light"
      ? `url(${Light}) center center fixed no-repeat`
      : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center ">
          <Col>
            <h1 className="mb-3 display-3 title " style={{ fontWeight: 600 }}>Mukhammadkarim Tukhtaboyev</h1>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
          </Col>
          <Col className="d-none d-md-block">
            <img
              src={Logo}
              alt="React Logo"
              className="w-75 mx-auto hero-img"
            />
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <FaChevronCircleDown />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}
