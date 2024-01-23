import { css } from "@emotion/react";
import Link from "next/link";
import { FC, memo } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const footerContainer = css`
  background-color: #010606;
`;
const footerWrap = css`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
const footerLinksContainer = css`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
const footerLinksWrapper = css`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const footerLinkItems = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
const footerLinkTitle = css`
  font-size: 14px;
  margin-bottom: 16px;
`;
const footerLink = css`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
const socialMedia = css`
  max-width: 1000px;
  width: 100%;
`;
const socialMediaWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const socialLogo = css`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
const websiteRights = css`
  color: #fff;
  margin-bottom: 16px;
`;
const socialIcons = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
const socialIconLink = css`
  color: #fff;
  font-size: 24px;
`;

const Footer: FC = memo(() => {
  return (
    <div css={footerContainer}>
      <div css={footerWrap}>
        <div css={footerLinksContainer}>
          <div css={footerLinksWrapper}>
            <div css={footerLinkItems}>
              <h1 css={footerLinkTitle}>About us</h1>
              <Link css={footerLink} href="/signin">
                How it works
              </Link>
              <Link css={footerLink} href="/signin">
                Testimonials
              </Link>
              <Link css={footerLink} href="/signin">
                Careers
              </Link>
              <Link css={footerLink} href="/signin">
                Investors
              </Link>
              <Link css={footerLink} href="/signin">
                Term of Services
              </Link>
            </div>
            <div css={footerLinkItems}>
              <h1 css={footerLinkTitle}>Videos</h1>
              <Link css={footerLink} href="/signin">
                Submit Video
              </Link>
              <Link css={footerLink} href="/signin">
                Ambassadors
              </Link>
              <Link css={footerLink} href="/signin">
                Agency
              </Link>
              <Link css={footerLink} href="/signin">
                Influencer
              </Link>
            </div>
          </div>
          <div css={footerLinksWrapper}>
            <div css={footerLinkItems}>
              <h1 css={footerLinkTitle}>Contact Us</h1>
              <Link css={footerLink} href="/signin">
                Contact
              </Link>
              <Link css={footerLink} href="/signin">
                Support
              </Link>
              <Link css={footerLink} href="/signin">
                Destinations
              </Link>
              <Link css={footerLink} href="/signin">
                Sponsorships
              </Link>
            </div>
            <div css={footerLinkItems}>
              <h1 css={footerLinkTitle}>Social Media</h1>
              <Link css={footerLink} href="/signin">
                Instagram
              </Link>
              <Link css={footerLink} href="/signin">
                Facebook
              </Link>
              <Link css={footerLink} href="/signin">
                Youtube
              </Link>
              <Link css={footerLink} href="/signin">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <section css={socialMedia}>
          <div css={socialMediaWrap}>
            <Link css={socialLogo} href="/">
              dolla
            </Link>
            <small css={websiteRights}>
              dolla © {new Date().getFullYear()}
              All rights reserved{" "}
            </small>
            <ul css={socialIcons}>
              <Link
                href="/"
                css={socialIconLink}
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                href="/"
                css={socialIconLink}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                href="/"
                css={socialIconLink}
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </Link>
              <Link
                href="/"
                css={socialIconLink}
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Footer;
