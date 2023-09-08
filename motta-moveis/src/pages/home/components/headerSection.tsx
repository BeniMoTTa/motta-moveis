import React, { ChangeEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Option {
  label: string;
  children: string[];
}

const HeaderSection = () => {
  const [selectedOption, setSelectedOption] = useState("true");
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
  const [selectedCheck, setSelectedCheck] = useState<string[]>([]);
  const options: Option[] = [
    {
      label: "Residencial",
      children: [
        "Apartamento",
        "Studio",
        "Kitnet",
        "Casa",
        "Casa de condomínio",
        "Casa de vila",
        "Cobertura",
        "Flat",
        "Loft",
        "Terreno / Lote / Condomínio",
        "Fazenda / Sítio / Chácara",
      ],
    },
    {
      label: "Comercial",
      children: [
        "Loja / Salão / Ponto Comercial",
        "Conjunto Comercial / Sala",
        "Casa Comercial",
        "Hotel / Motel / Pousada",
        "Andar / Laje Corporativa",
        "Prédio Inteiro",
        "Terrenos / Lotes Comerciais",
        "Galpão / Depósito / Armazém",
        "Garagem",
      ],
    },
  ];

  const toggleOption = (option: string) => {
    if (selectedCheck.includes(option)) {
      setSelectedCheck(selectedCheck.filter((item) => item !== option));
    } else {
      setSelectedCheck((prevSelectedCheck) => [...prevSelectedCheck, option]);
    }
  };
  return (
    <section className="w-full pt-[2px] bg-blueBackGround pb-[30px]">
      <div className="allign w-[97%] flex items-center">
        <div className="relative">
          <img
            src="https://img.freepik.com/fotos-premium/tudo-isso-parece-irreal-foto-de-um-jovem-casal-comemorando-a-mudanca-para-sua-nova-casa_590464-3092.jpg"
            alt=""
            className="borderImgHeader"
          />
          <div className="border-2 border-[orange] borderHeaderImg absolute top-[8%] left-[8%]"></div>
        </div>
        <div className="ml-[20px]">
          <h2 className="text-[25px] font-bold">
            Aqui você tem o imóvel do jeitinho que você procura.
          </h2>
          <h4 className="text-[18px] ">
            6,5 milhões de opções para encontrar seu novo lar.
          </h4>
          <form className="mt-[30px]">
            <div className="flex">
              <label
                className={`flex items-center rounded h-[48px] w-[50%] ${
                  selectedOption === "false" ? "border-b-4  text-[orange]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  name="userType"
                  value="false"
                  checked={selectedOption === "false"}
                  onChange={handleOptionChange}
                />
                <div className=" text-[16px]  h-[48px] w-full font-bold rounded-md cursor-pointer flex justify-center items-center">
                  Comprar
                </div>
              </label>

              <label
                className={`flex items-center rounded h-[48px] w-[50%] ${
                  selectedOption === "true" ? "border-b-4  text-[orange]" : ""
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  name="userType"
                  value="true"
                  checked={selectedOption === "true"}
                  onChange={handleOptionChange}
                />
                <div className=" border-grey3 text-[16px] h-[48px] w-full font-bold rounded-md px-4 py-2 cursor-pointer flex justify-center items-center">
                  Alugar
                </div>
              </label>
            </div>
            <div className="">
              <div className="mt-[20px] w-[90%]">
                <label>Onde deseja morar?</label>
                <div className="flex items-center bg-white h-[50px] rounded pl-[10px] mt-[5px]">
                  <span className="text-[orange] text-[22px]">
                    <BsSearch />
                  </span>
                  <input
                    type="text"
                    className="pl-4 w-full h-full"
                    placeholder="Digite nome da rua, bairro ou cidade"
                  />
                </div>
              </div>
              <div className="mt-[20px] w-[90%]">
                <label>Tipo de imóvel</label>
                <div>
                  <select>
                    {options.map((optionGroup, index) => (
                      <optgroup key={index} label={optionGroup.label}>
                        {optionGroup.children.map((option, idx) => (
                          <option
                            key={idx}
                            onClick={() => toggleOption(option)}
                          >
                            <input
                              type="checkbox"
                              checked={selectedCheck.includes(option)}
                              onChange={() => toggleOption(option)}
                            />
                            {option}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
