import React from "react";

const FooterMinor = () => {
  return (
    <footer className="w-full h-[150px] bg-grey3">
      <div className="max-w-[1440px] allign flex pt-[30px] gap-10 justify-center">
        <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
          Termos de uso
        </button>
        <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
          Políticas de privacidade
        </button>
        <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
          Política de cookies
        </button>
        <button className="text-white text-[18px] w-fit hover:underline underline-offset-auto">
          Portal de privacidade
        </button>
      </div>
    </footer>
  );
};

export default FooterMinor;
