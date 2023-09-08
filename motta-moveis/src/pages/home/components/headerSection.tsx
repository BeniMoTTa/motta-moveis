import React from "react";

const HeaderSection = () => {
  return (
    <section className="w-full pt-[2px] bg-blueBackGround pb-[30px]">
      <div className="allign w-[97%] ">
        <div className="relative">
          <img
            src="https://img.freepik.com/fotos-premium/tudo-isso-parece-irreal-foto-de-um-jovem-casal-comemorando-a-mudanca-para-sua-nova-casa_590464-3092.jpg"
            alt=""
            className="borderImgHeader"
          />
          <div className="border-2 border-[orange] borderHeaderImg absolute top-8 left-8"></div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
