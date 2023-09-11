import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AllNear = () => {
  return (
    <section className="h-[1000px] flex flex-col items-center text-[25px] font-bold">
      <h2>Imóveis próximos a você cadastrados</h2>
      <div className="w-[80px] rounded-xl h-1 bg-[purple] mt-[20px]"></div>
      <div className="h-[600px]"></div>
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

export default AllNear;
