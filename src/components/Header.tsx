import { css } from "@emotion/react";
import { FC, memo, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

export const nav = ({ scrollNav }: { scrollNav: boolean }) => css`
  background: ${scrollNav ? "#000" : "transparent"};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: ease all 0.8s;
  @media screen and (max-width: 960px) {
    transition: ease all 0.8s;
  }
`;
export const navbarContainer = css`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;
export const navLogo = css`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  margin-left: 24px;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;
export const mobileIcon = css`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    color: #fff;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const navMenu = css`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const navItem = css`
  height: 80px;
`;
export const navLinks = css`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const navBtn = css`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const navBtnLink = css`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 16px;

  &:hover {
    transition: all 0.2 ease-in-out;
    background-color: #fff;
  }
`;

const Header: FC<{ toggle: any }> = memo(({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const scrollHome = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <nav css={nav({ scrollNav })}>
      <div css={navbarContainer}>
        <a href="/" onClick={scrollHome}>
          dolla
        </a>
        <div css={mobileIcon} onClick={toggle}>
          <FaBars />
        </div>
        <ul css={navMenu}>
          <li css={navItem}>
            <Link
              css={navLinks}
              smooth
              spy
              duration={500}
              offset={-800}
              to="about"
            >
              About
            </Link>
          </li>
          <li css={navItem}>
            <Link
              css={navLinks}
              smooth
              spy
              duration={500}
              offset={-800}
              to="discover"
            >
              Discover
            </Link>
          </li>
          <li css={navItem}>
            <Link
              css={navLinks}
              smooth
              spy
              duration={500}
              offset={-800}
              to="services"
            >
              Services
            </Link>
          </li>
          <li css={navItem}>
            <Link
              css={navLinks}
              smooth
              spy
              duration={500}
              offset={-800}
              to="signup"
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <nav>
          <a href="/signin">Sign In</a>
        </nav>
      </div>
    </nav>
  );
});
export default Header;
