import React from "react";
import logo from "../../assets/LogoMottaImoveis.png";
const Header = () => {
  return (
    <header className=" w-full h-[120px] flex bg-[yellow]">
      <div className="w-[95%] allign px-[2%] h-full bg-[black] text-[pink] flex items-center">
        <img src={logo} alt="" className="w-[160px]" />
        {}
        testando
      </div>
    </header>
  );
};

export default Header;
