import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import { HomeInfo1, HomeInfo2, HomeInfo3 } from "@/components/InfoSectionData";
import PageContainer from "@/components/PageContent";
import Services from "@/components/Services";
import { css } from "@emotion/react";
import { NextPage } from "next";

const container = css({
  height: "100%",
});

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <HeroSection />
      <InfoSection info={HomeInfo1} variant="light" />
      <InfoSection info={HomeInfo2} variant="dark" />
      <Services />
      <InfoSection info={HomeInfo3} variant="dark" />
    </PageContainer>
  );
};

export default HomePage;
