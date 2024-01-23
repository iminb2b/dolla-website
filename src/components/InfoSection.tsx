import { css } from "@emotion/react";
import { FC, memo } from "react";
import { Link } from "react-scroll";
import { HomeInfo } from "./InfoSectionData";

export const infoContainer = ({ light }: { light: boolean }) => css`
  color: #fff;

  background: ${light ? "#f9f9f9" : "#010606"};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const infoWrapper = css`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
export const infoRow = ({ imgStart }: { imgStart: boolean }) => css`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${imgStart
      ? `'col1' 'col2'`
      : `'col1 col1' 'col2 col2'`};
  }
`;
export const column1 = css`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const column2 = css`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const textWrapper = css`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const topLineText = css`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const heading = ({ dark }: { dark: boolean }) => css`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.%;
  font-weight: 600;
  color: ${dark ? "#f7f8fa" : "#010606"};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const subtitle = ({ dark }: { dark: boolean }) => css`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${dark ? "#fff" : "#010606"};
`;
export const btnWrap = css`
  display: flex;
  justify-content: flex-start;
`;
export const imgWrap = css`
  max-width: 555px;
  height: 100%;
`;
export const image = css`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

const InfoSection: FC<{
  variant: "light" | "dark";
  info: HomeInfo;
}> = memo(({ variant, info }) => {
  return (
    <div id={info.id} css={infoContainer({ light: variant === "light" })}>
      <div css={infoWrapper}>
        <div css={infoRow({ imgStart: variant === "dark" })}>
          <div css={column1}>
            <div css={textWrapper}>
              <div css={topLineText}>{info.topLine}</div>
              <h1 css={heading({ dark: variant === "dark" })}>
                {info.headline}
              </h1>
              <p css={subtitle({ dark: variant === "dark" })}>
                {info.description}
              </p>
              <div css={btnWrap}>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  {info.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
          <div css={column2}>
            <div css={imgWrap}>
              <img css={image} src={info.img} alt={info.alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default InfoSection;
