import React from "react";
import CardsPosts from "./CardsPosts";

const Posts = () => {
  return (
    <section className="pt-[80px] bg-[yellow] h-[800px] flex items-center flex-col">
      <h2 className="mb-[20px] text-[25px]">
        Encontre o imóvel ideal para seu estilo de vida
      </h2>
      <div className="w-[60px] h-[5px] rounded-xl bg-[black]"></div>
      <div className="mt-[50px]">
        <CardsPosts />
      </div>
    </section>
  );
};

export default Posts;
