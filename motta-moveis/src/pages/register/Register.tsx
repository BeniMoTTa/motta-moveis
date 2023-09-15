import React from "react";
import logo from "../../assets/LogoMottaImoveis.png";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex-1 flex-col ">
      <div className="max-w-[1440px] flex items-center flex-col justify-center pt-[20px] pb-[50px]">
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
              <BiLogoGmail />
            </span>
            Cadastrar com seu Gmail
          </button>

          <div className="flex items-center gap-4 mt-[20px] mb-[20px]">
            <div className="w-20 h-[1px] bg-grey4"></div>
            <span className="text-[17px] text-grey3">
              ou cadastre com seu e-mail
            </span>
            <div className="w-20 h-[1px] bg-grey4"></div>
          </div>
          <form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Escreva aqui seu nome"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="sobrenome"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Sobrenome
              </label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Escreva aqui seu sobrenome..."
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Escreva aqui seu email..."
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="senha"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Senha (mínimo 3 caracteres)
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Escreva aqui sua senha..."
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="telefone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Telefone (Opcional)
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                placeholder="Escreva aqui seu número..."
              />
            </div>
            <button className=" custom-btn btn-12  text-white mt-[20px] rounded-3xl flex justify-center items-center relative overflow-hidden text-[21px] font-bold">
              <span>Click!</span>
              <span>Sign up</span>
            </button>
            <div className="w-full flex justify-center items-center mt-[10px] flex-col">
              <p className="text-[18px]">
                Já possui conta?{" "}
                <span className="text-[orange] hover:underline cursor-pointer">
                  Clique aqui!
                </span>
              </p>
              <Link
                to={"/"}
                className="hover:text-[orange] hover:font-bold cursor-pointer flex justify-center items-center gap-2 font-bold underline link mt-2"
              >
                <span className="text-[18px] span-animation">
                  <SlLogout />
                </span>
                Voltar para a página inicial
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
