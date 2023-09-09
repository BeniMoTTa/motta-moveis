import React from "react";
import Header from "../../components/header";
import HeaderSection from "./components/headerSection";
import Posts from "./components/Posts";
import NearToUser from "./components/NearToUser";
import AllNear from "./components/AllNear";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderSection />
      <Posts />
      <NearToUser />
      <AllNear />
    </div>
  );
};

export default Home;
