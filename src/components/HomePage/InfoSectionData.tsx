export type HomeInfo = {
  id: string;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  img: any;
  alt: string;
};

export const HomeInfo1: HomeInfo = {
  id: "about",
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you send unlimtied transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  img: "/images/svg-1.svg",
  alt: "car",
};
export const HomeInfo2: HomeInfo = {
  id: "discover",
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  img: "/images/svg-3.svg",
  alt: "Saving",
};
export const HomeInfo3: HomeInfo = {
  id: "signup",
  topLine: "Join Our Team",
  headline: "Creating an account is extremely easy",
  description:
    "Got everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start now",
  img: "/images/svg-2.svg",
  alt: "car",
};
