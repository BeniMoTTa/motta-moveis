import React from "react";

const FooterMain = () => {
  return (
    <footer className="w-full h-[700px] bg-graphite">
      <div className="max-w-[1440px] allign flex pt-[30px]">
        <div className="pl-[15px] w-[200px]">
          <h4 className="text-[white] text-[20px]">Encontre Imóveis</h4>
          <div className="w-6 h-[1px] bg-white mt-[4px]"></div>
          <div className="flex flex-col justify-start gap-4 pt-[20px]">
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Venda
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Aluguel
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Lançamentos
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Alugar barato
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Comprar barato
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Explorar
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Meu espaço
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
