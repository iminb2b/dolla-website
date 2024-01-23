import { css } from "@emotion/react";
import Link from "next/link";
import { FC, memo } from "react";

export const container = css`
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
  padding-bottom: 5rem;
`;
export const formWrap = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and( max-width: 400px) {
    height: 80%;
  }
`;
export const icon = css`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const formContent = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const formContainer = css`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const formH1 = css`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const formLabel = css`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const formInput = css`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const formButton = css`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const text = css`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

const SignInPageContent: FC = memo(() => {
  return (
    <div css={container}>
      <div css={formWrap}>
        <Link css={icon} href="/">
          dolla
        </Link>
        <div>
          <form css={formContainer} action="#">
            <div css={formH1}>Sign in to your account</div>
            <label css={formLabel} htmlFor="for">
              Email
            </label>
            <input css={formInput} type="email" required />
            <label css={formLabel} htmlFor="for">
              Email
            </label>
            <input css={formInput} type="password" required />
            <button css={formButton} type="submit">
              Continue
            </button>
            <span css={text}>Forgot password?</span>
          </form>
        </div>
      </div>
    </div>
  );
});

export default SignInPageContent;
