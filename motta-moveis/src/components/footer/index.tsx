import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

const FooterMain = () => {
  return (
    <footer className="w-full h-[500px] bg-graphite">
      <div className="max-w-[1440px] allign flex pt-[30px] gap-10 justify-center">
        <div className="pl-[15px] w-[200px]">
          <h4 className="text-[white] text-[20px] font-bold">
            Encontre Imóveis
          </h4>
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
        <div className="pl-[15px] w-[250px]">
          <h4 className="text-[white] text-[20px] font-bold">Institucional</h4>
          <div className="w-6 h-[1px] bg-white mt-[4px]"></div>
          <div className="flex flex-col justify-start gap-4 pt-[20px]">
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Quer trabalhar conosco?
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Mapa do site
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Blog
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Ajuda
            </button>
          </div>
        </div>
        <div className="pl-[15px] w-[250px]">
          <h4 className="text-[white] text-[20px] font-bold">Anunciante</h4>
          <div className="w-6 h-[1px] bg-white mt-[4px]"></div>
          <div className="flex flex-col justify-start gap-4 pt-[20px]">
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Anunciar imóvel
            </button>
            <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
              Política de Qualidade
            </button>
          </div>
        </div>
        <div className="pl-[15px] w-[250px]">
          <h4 className="text-[white] text-[20px] font-bold">Redes Sociais</h4>
          <div className="w-6 h-[1px] bg-white mt-[4px]"></div>
          <div className="flex justify-start gap-4 pt-[20px]">
            <button className="text-white hover:bg-blueSteel text-[18px] w-[38px] h-[38px] rounded-full flex items-center justify-center border-2 w-fit hover:underline underline-offset-auto">
              <span className="text-[22px]">
                <BsFacebook />
              </span>
            </button>
            <button className="text-white text-[18px] hover:bg-random10 w-[38px] h-[38px] rounded-full flex items-center justify-center border-2 w-fit hover:underline underline-offset-auto">
              <span className="text-[22px]">
                <BsInstagram />
              </span>
            </button>
            <button className="text-white hover:bg-blueSteelLight text-[18px] w-[38px] h-[38px] rounded-full flex items-center justify-center border-2 w-fit hover:underline underline-offset-auto">
              <span className="text-[22px]">
                <BsTwitter />
              </span>
            </button>
            <button className="text-white text-[18px] hover:bg-random3 w-[38px] h-[38px] rounded-full flex items-center justify-center border-2 w-fit hover:underline underline-offset-auto">
              <span className="text-[22px]">
                <BsPinterest />
              </span>
            </button>
            <button className="text-white text-[18px] hover:bg-[red] w-[38px] h-[38px] rounded-full flex items-center justify-center border-2 w-fit hover:underline underline-offset-auto">
              <span className="text-[22px]">
                <BsYoutube />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
