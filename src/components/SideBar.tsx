import { css } from "@emotion/react";
import { FC, memo } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const sidebarContainer = ({ isOpen }: { isOpen: boolean }) => css`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${isOpen ? 1 : 0};
  top: ${isOpen ? "0" : "-100%"};
`;
export const closeIcon = css`
  color: #fff;
`;
export const icon = css`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const sidebarWrapper = css`
  color: #fff;
`;
export const sidebarMenu = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const sidebarLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const sideBtnWrap = css`
  display: flex;
  justify-content: center;
`;
export const sidebarRoute = css`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  text-decoration: none;

  &:hover {
    transition: ease-in-out 0.2s all;
    background-color: #fff;
  }
`;

const Sidebar: FC<{ isOpen: boolean; toggle: any }> = memo(
  ({ isOpen, toggle }) => {
    return (
      <>
        <aside css={sidebarContainer({ isOpen })} onClick={toggle}>
          <div css={icon} onClick={toggle}>
            <FaTimes css={closeIcon} />
          </div>
          <div css={sidebarWrapper}>
            <div css={sidebarMenu}>
              <Link
                smooth
                spy
                duration={500}
                offset={-800}
                to="about"
                onClick={toggle}
              >
                About
              </Link>
              <Link
                smooth
                spy
                duration={500}
                offset={-800}
                to="discover"
                onClick={toggle}
              >
                Discover
              </Link>
              <Link
                smooth
                spy
                duration={500}
                offset={-800}
                to="services"
                onClick={toggle}
              >
                Services
              </Link>
              <Link
                smooth
                spy
                duration={500}
                offset={-800}
                to="signup"
                onClick={toggle}
              >
                Sign Up
              </Link>
            </div>
            <div css={sideBtnWrap}>
              <a href="/signin" css={sidebarRoute}>
                Sign In
              </a>
            </div>
          </div>
        </aside>
      </>
    );
  },
);

export default Sidebar;
