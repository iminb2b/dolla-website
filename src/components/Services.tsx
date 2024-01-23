import { css } from "@emotion/react";
import { FC, memo } from "react";

export const servicesContainer = css`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1100px;
  }
  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;
export const servicesWrapper = css`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const servicesH1 = css`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const servicesCard = css`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all ease-in-out 0.2s;
    cursor: pointer;
  }
`;
export const servicesIcon = css`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const servicesH2 = css`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const servicesP = css`
  font-size: 1rem;
  text-align: center;
`;

const Services: FC = memo(() => {
  return (
    <div css={servicesContainer} id="services">
      <h1 css={servicesH1}>Our Services</h1>
      <div css={servicesWrapper}>
        <div css={servicesCard}>
          <img css={servicesIcon} src={"/images/svg-4.svg"} />
          <h2 css={servicesH2}>Reduce expense</h2>
          <p css={servicesP}>
            We help reduce your fees and increase your overall revenue.
          </p>
        </div>
        <div css={servicesCard}>
          <img css={servicesIcon} src={"/images/svg-2.svg"} />
          <h2 css={servicesH2}>Virtual office</h2>
          <p css={servicesP}>
            You can access our platform online anywhere in the world.
          </p>
        </div>
        <div css={servicesCard}>
          <img css={servicesIcon} src={"/images/svg-3.svg"} />
          <h2 css={servicesH2}>Premium Beniefit</h2>
          <p css={servicesP}>
            Unlock our special membership card that returns 5% cash back.
          </p>
        </div>
      </div>
    </div>
  );
});
export default Services;
