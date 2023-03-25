import React from "react";
import styled from "styled-components";
import { FaGithub, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa";
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {

  return (
    <StyledSocialLinks>
      <a
        href="https://github.com/dotnetgoo"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />
      </a>
      <a
        href="https://t.me/mukhammadkarim_tukhtaboev"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaTelegram />
      </a>
      <a
        href="https://www.youtube.com/@JanobPanda"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaYoutube />
      </a>
      <a
        href="https://www.linkedin.com/in/mukhammadkarim-tukhtaboev/"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaLinkedin />
      </a>

    </StyledSocialLinks>
  );
}
