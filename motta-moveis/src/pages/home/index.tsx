import React from "react";
import Header from "../../components/header";
import HeaderSection from "./components/headerSection";
import Posts from "./components/Posts";
import NearToUser from "./components/NearToUser";
import AllNear from "./components/AllNear";
import FooterMain from "../../components/footer";
import FooterMinor from "../../components/footer/FooterMinor";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderSection />
      <Posts />
      <NearToUser />
      <AllNear />
      <FooterMain />
      <FooterMinor />
    </div>
  );
};

export default Home;
