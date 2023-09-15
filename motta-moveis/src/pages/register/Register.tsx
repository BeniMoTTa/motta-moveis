import React from "react";
import logo from "../../assets/LogoMottaImoveis.png";
import { BsFacebook } from "react-icons/bs";

const Register = () => {
  return (
    <div className="flex-1 flex-col ">
      <div className="max-w-[1440px] flex items-center flex-col justify-center pt-[8%]">
        <div className="flex flex-col items-center justify-center w-[415px] maxsm:">
          <img src={logo} alt="" className="w-[250px] mb-[20px]" />
          <p className="text-[16px] text-justify mb-[20px]">
            Ao me cadastrar, aceito os{" "}
            <span className="hover:text-[orange] cursor-pointer font-bold">
              Termos de uso
            </span>{" "}
            e{" "}
            <span className="hover:text-[orange] cursor-pointer font-bold">
              Política de privacidade
            </span>{" "}
            do Grupo ZAP, receber comunicações do ZAP e afirmo ter 18 anos ou
            mais.
          </p>
          <button className="w-full h-14 text-white rounded-3xl flex justify-center items-center bg-bluePosca gap-2 text-[18px] hover:bg-blueSteel">
            <span className="text-[21px]">
              <BsFacebook />
            </span>
            Cadastrar com Facebook
          </button>
          <button className="w-full h-14 text-white mt-[20px] rounded-3xl flex justify-center items-center bg-gradient-to-r from-blueSteel to-red-500 gap-2 text-[18px]">
            <span className="text-[21px]">
              <BsFacebook />
            </span>
            Cadastrar com Facebook
          </button>

          <div className="flex items-center gap-4 mt-[20px]">
            <div className="w-20 h-[1px] bg-grey4"></div>
            <span className="text-[17px] text-grey3">
              ou cadastre com seu e-mail
            </span>
            <div className="w-20 h-[1px] bg-grey4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
