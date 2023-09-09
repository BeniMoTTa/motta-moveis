import React from "react";
import Header from "../../components/header";
import HeaderSection from "./components/headerSection";
import Posts from "./components/Posts";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderSection />
      <Posts />
    </div>
  );
};

export default Home;
