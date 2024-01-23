import { css } from "@emotion/react";
import { FC, memo, useCallback, useState } from "react";
import { Link } from "react-scroll";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const arrowForward = css`
  margin-left: 8px;
  font-size: 20px;
`;
export const arrowRight = css`
  margin-left: 8px;
  font-size: 20px;
`;

export const button = ({
  primary,
  size,
  dark,
}: {
  primary: boolean;
  size: "medium" | "large";
  dark: boolean;
}) => css`
  border-radius: 50px;
  background: ${primary ? "#01bf71" : "#010606"};
  white-space: nowrap;
  padding: ${size === "large" ? "14px 48px" : "12px 30px"};
  color: ${dark ? "#010606" : "#fff"};
  font-size: ${size === "large" ? "20px" : "16px"};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.2s;

  &:hover {
    transition: all ease-in-out 0.2s;
    background: ${primary ? "#fff" : "#01bf71"};
  }
`;

const ButtonLink: FC<{
  primary: boolean;
  size: "medium" | "large";
  dark: boolean;
  href: string;
  text: string;
  enableArrow?: boolean;
}> = memo(({ primary, size, dark, href, text, enableArrow = false }) => {
  const [hover, setHover] = useState<boolean>(false);

  const onHover = useCallback(() => setHover(!hover), []);

  return (
    <Link
      to={href}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      smooth
      spy={true}
      duration={500}
      offset={80}
      css={button({ primary, size, dark })}
    >
      {text}
      {enableArrow &&
        (hover ? (
          <MdArrowForward css={arrowForward} />
        ) : (
          <MdKeyboardArrowRight css={arrowRight} />
        ))}
    </Link>
  );
});

export default ButtonLink;
