import React from "react";
import logo from "../../assets/LogoMottaImoveis.png";

const HeaderAnnounce = () => {
  return (
    <header className="w-full bg-[orange-300]">
      <div className="max-w-[1400px]">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default HeaderAnnounce;
