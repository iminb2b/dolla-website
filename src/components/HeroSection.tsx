import { css } from "@emotion/react";
import { FC, memo } from "react";
import ButtonLink from "./Button";

export const heroContainer = css`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  /*Add :before styles */
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const heroBg = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const videoBg = css`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const heroContent = css`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  flex-direction: column;
  align-items: center;
  display: flex;
`;
export const heroH1 = css`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const heroP = css`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const heroBtnWrapper = css`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection: FC = memo(() => {
  return (
    <div css={heroContainer} id="home">
      <div css={heroBg}>
        <video css={videoBg} autoPlay loop muted src={"/video.mp4"} />
      </div>
      <div css={heroContent}>
        <h1 css={heroH1}>Virtual Banking Made Easy</h1>
        <p css={heroP}>
          Sign up for a new account today and revceive $250 in credit towards
          your next payment
        </p>
        <div css={heroBtnWrapper}>
          <ButtonLink></ButtonLink>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;
