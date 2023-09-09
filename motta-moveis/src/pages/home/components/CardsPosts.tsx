import React from "react";

const CardsPosts = () => {
  const mockCards = [
    {
      image:
        "https://s2.glbimg.com/gyx27RuuXuQGnW75gi9lc7i5PwU=/e.glbimg.com/og/ed/f/original/2019/04/17/gettyimages-857558856.jpg",
      title: "Pronto para o seu pet",
      text: "Seus patudos com você. Encontre as melhores ofertas de aluguel de imóveis para voê e seu pet.",
    },
    {
      image: "https://5dkids.com.br/wp-content/uploads/2019/06/post008.jpg",
      title: "Mais espaço para a família",
      text: "Se é varanda e áreas comuns que você procura, veja essa seleção de apartamentos e casa à venda.",
    },
    {
      image:
        "https://i0.wp.com/lannafigueredo.com.br/wp-content/uploads/2022/07/hobbies-para-o-casal-dentro-de-casa.jpg?resize=1024%2C427&ssl=1",
      title: "Mobiliados para locação",
      text: "Não quer gastar com móveis agora? Veja os melhores imóveis mobiliados para alugar. Pronto para entrar e morar.",
    },
    {
      image:
        "https://static.vecteezy.com/ti/fotos-gratis/p1/7187317-negocios-pai-solteiro-tentando-trabalhar-fazendo-um-telefonema-enquanto-cuida-de-sua-filha-juntos-em-casa-enquanto-a-filha-gosta-de-mexe-com-o-pai-enquanto-trabalha-gratis-foto.jpg",
      title: "Aluguel sem fiador",
      text: "Alugar o imóvel dos sonhos nunca foi tão fácil! Encontre os melhores imóveis para alugar.",
    },
  ];

  return (
    <>
      {" "}
      <div className="w-[250px] h-[450px]">
        <img
          src="https://s2.glbimg.com/gyx27RuuXuQGnW75gi9lc7i5PwU=/e.glbimg.com/og/ed/f/original/2019/04/17/gettyimages-857558856.jpg"
          alt=""
          className="w-full h-[200px] card-image"
        />
      </div>
    </>
  );
};

export default CardsPosts;
