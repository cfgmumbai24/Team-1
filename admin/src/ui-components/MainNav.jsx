import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineBell,
  HiOutlineCake
} from "react-icons/hi2";
import { GrSchedule } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
       <NavList>
        <li>
          <StyledNavLink to="/">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/syllabus">
            <PiBooks />
            <span>Syllabus</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/timetable">
            <GrSchedule />
            <span>Time Table</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/projects">
            <FaComputer />
            <span>Modules</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/feedback">
            <HiOutlineUsers />
            <span>Feedback</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/aicte">
            <IoBookOutline />
            <span>AICTE Points</span>
          </StyledNavLink>
        </li> */}
      </NavList>
    </nav>
  );
}

export default MainNav;