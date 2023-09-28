import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/LogoMottaImoveis.png";

const HeaderAnnounce = () => {
  return (
    <header className="w-full bg-[orange-300] h-20  ">
      <div className="max-w-[1400px] flex allign items-center h-full justify-between">
        <img src={logo} alt="" className="w-[180px]" />
        <button className="flex gap-3 border-2 w-24 h-10 justify-center rounded items-center text-[18px] text-grey3">
          <span className="text-[24px] text-grey3">
            <FaRegUserCircle />
          </span>
          Entrar
        </button>
      </div>
      <div></div>
    </header>
  );
};

export default HeaderAnnounce;
