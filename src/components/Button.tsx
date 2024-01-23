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

const ButtonLink: FC = memo(() => {
  const [hover, setHover] = useState<boolean>(false);

  const onHover = useCallback(() => setHover(!hover), []);

  return (
    <Link
      to="signup"
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      smooth
      spy={true}
      duration={500}
      offset={80}
    >
      Get Started{" "}
      {hover ? (
        <MdArrowForward css={arrowForward} />
      ) : (
        <MdKeyboardArrowRight css={arrowRight} />
      )}
    </Link>
  );
});

export default ButtonLink;
