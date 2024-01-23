import Header from "@/components/Header";
import HeroSection from "@/components/HomePage/HeroSection";
import InfoSection from "@/components/HomePage/InfoSection";
import {
  HomeInfo1,
  HomeInfo2,
  HomeInfo3,
} from "@/components/HomePage/InfoSectionData";
import PageContainer from "@/components/PageContent";
import Services from "@/components/HomePage/Services";
import Sidebar from "@/components/SideBar";
import { css } from "@emotion/react";
import { NextPage } from "next";
import { useState } from "react";

const HomePage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <PageContainer>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection info={HomeInfo1} variant="dark" />
      <InfoSection info={HomeInfo2} variant="light" />
      <Services />
      <InfoSection info={HomeInfo3} variant="light" />
    </PageContainer>
  );
};

export default HomePage;
