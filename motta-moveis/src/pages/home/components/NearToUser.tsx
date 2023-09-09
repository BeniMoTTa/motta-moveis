import React from "react";
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
    </section>
  );
};

export default NearToUser;
