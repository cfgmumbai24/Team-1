import styled from "styled-components";
// import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 15rem
`;

function Logo() {
//   const {isDarkMode,  toggleDarkMode} = useDarkMode();
  return (
    <StyledLogo>
      <Img src="/multiply_logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;