import React from "react";
import logo from "../../assets/LogoMottaImoveis.png";
const Header = () => {
  return (
    <header className=" w-full h-[120px] flex bg-[yellow]">
      <div className="w-[95%] allign px-[2%] h-full bg-[black] text-[pink] flex items-center justify-between">
        <img src={logo} alt="" className="w-[160px]" />
        {}
        <div className="gap-[2%] flex">
          <button className="basic-btn">Comprar</button>
          <button className="basic-btn">Alugar</button>
          <button className="basic-btn">Lançamentos</button>
          <button className="basic-btn">Descobrir</button>
          <button className="basic-btn">Financiamento</button>
          <button className="basic-btn">Ajuda</button>
          <button className="basic-btn">Anuncie conosco</button>
          <button className="basic-btn">Criar conta</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
