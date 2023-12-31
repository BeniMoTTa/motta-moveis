import React from "react";
import marketing from "../../../assets/tradingMotta.png";
import CardsPosts from "./CardsPosts";

const Posts = () => {
  return (
    <section className="pt-[80px] bg-[white] h-[1150px] flex items-center flex-col ">
      <h2 className="mb-[20px] text-[25px]">
        Encontre o imóvel ideal para seu estilo de vida
      </h2>
      <div className="w-[60px] h-[5px] rounded-xl bg-[orange]"></div>
      <div className="mt-[50px]">
        <CardsPosts />
      </div>
      <div className="">
        <img src={marketing} alt="" className="w-full h-[400px] rounded-xl" />
      </div>
    </section>
  );
};

export default Posts;
