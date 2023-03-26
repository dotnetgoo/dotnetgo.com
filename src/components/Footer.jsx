import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  background: linear-gradient(128.87deg, #0b6cff 14.05%, #512bd4 89.3%);

  a {
    color: #fbfdff;

    &:hover {
      color: #D600AA;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <SocialLinks />
    </StyledFooter>
  );
}
