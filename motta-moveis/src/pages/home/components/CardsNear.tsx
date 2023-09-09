import React from "react";

const CardsNear = () => {
  const mockCards = [
    {
      image:
        "https://s2.glbimg.com/gyx27RuuXuQGnW75gi9lc7i5PwU=/e.glbimg.com/og/ed/f/original/2019/04/17/gettyimages-857558856.jpg",
      title: "Pronto para o seu pet",
      text: "Seus patudos com você. Encontre as melhores ofertas de aluguel de imóveis para voê e seu pet.",
    },
  ];
  return (
    <div className="flex gap-8">
      {mockCards.map((data, index) => (
        <div key={index} className="w-[250px] h-[450px]">
          <img
            src={data.image}
            alt=""
            className="w-full h-[200px] card-image"
          />
          <h2 className="text-[18px] my-[8px] font-bold">{data.title}</h2>
          <p className="text-[16px] text-justify ">{data.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsNear;
