/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useAppContext } from "../appContext";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FixedNavSpacer } from "./globalStyledComponents";
import Logo from "../images/nav_logo.png";
import NameImg from "../images/name.png";
const StyledNavbar = styled.header`
  .nav_links_cont {
    margin-left:100px
  } 
  .nav-link{
  color:black;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-right:32px
  }
  .contact_me_link{
    text-decoration:none;
   font-weight: 500;
   font-size: 16px;
   line-height: 20px;
   color: #FFFFFF;
   background: #5300CE;
   border-radius: 10px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 10px;
   width: 160px;
   height: 52px;
   cursor:pointer;
   margin-top:10px;
  } @media screen and (max-width: 1240px) {
    .nav_links_cont {
      margin-left: 36px;
  }}
  @media screen and (max-width: 1083px) {
    .nav-link {
      margin-right: 20px;
  }
  }
  @media screen and (max-width: 1320px) {
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width:360px) {
  }
`;
export default function NavBar() {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  return (
    <StyledNavbar>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        variant={theme === "light" ? "light" : "dark"}
      >
        <Container >
          <Navbar.Brand >
            <div style={{ display: "flex" }}>
              <img
                onClick={closeExpanded}
                alt="React Logo"
                src={Logo}
                width="40"
                height="40"
              />
              <img
                onClick={closeExpanded}
                alt="React Logo"
                src={NameImg}
                width="120"
                height="40"
                style={{ marginLeft: "8px" }}
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto nav_links_cont" >
              <Nav.Item>
                <Link
                  to={"About"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Interviews"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Interviews
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Companies"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Companies
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Teachers"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Teachers
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Recommendations"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Recommendations
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <a className="contact_me_link" target="_blank" href="https://t.me/dotnetgo">Contact Me</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledNavbar>
  );
}
