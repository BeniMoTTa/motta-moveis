import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import CardsNear from "./CardsNear";

const NearToUser = () => {
  return (
    <section className="h-[800px] flex flex-col items-center">
      <h2 className="text-[25px] font-bold">
        Imóveis que baixaram de preço em até 2% próximos a você
      </h2>
      <div className="w-[80px] rounded-xl h-1 bg-[purple] mt-[20px]"></div>
      <div className="mt-[70px]">
        <CardsNear />
      </div>
      <div className="w-full flex justify-end gap-6">
        <button className="border-2 bg-[lightgray] w-[40px] rounded h-[40px] flex items-center justify-center">
          <span className="text-[22px]">
            <AiOutlineArrowLeft />
          </span>
        </button>
        <button className="border-2 bg-[lightgray] w-[40px] rounded h-[40px] flex items-center justify-center">
          <span className="text-[22px]">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default NearToUser;
