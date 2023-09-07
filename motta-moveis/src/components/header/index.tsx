import React, { useEffect, useState } from "react";
import logo from "../../assets/LogoMottaImoveis.png";
import { BsPersonUp } from "react-icons/bs";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && screenWidth <= 1200) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const dropdownButtonHandler = () => {
    toggleDropdown();
    updateMenu();
    menu_class;
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="w-full h-[90px] flex bg-[yellow]">
      <div className="w-[99%] allign px-[2%] h-full bg-[#fff] text-[pink] flex items-center justify-between">
        <img src={logo} alt="" className="w-[160px]" />
        {showDropdown ? (
          <nav className="md:flex text-[18px] font-bold text-[graphite]">
            <button className="w-[140px] h-[50px] text-[16px] text-[white] rounded-xl bg-blueSteel mr-[20px]">
              Criar Conta
            </button>
            <button className="w-[120px] h-[50px] text-[15px] rounded-xl text-blueSteel hover:bg-blueSteelLight hover:text-[white] flex gap-2 items-center justify-center  mr-[20px]">
              <span className="text-[24px]">
                <BsPersonUp />
              </span>
              Entrar
            </button>
          </nav>
        ) : (
          <nav className="md:flex text-[18px] font-bold text-[graphite]">
            <button className="text-[16px] hoverUnderLineAnimation mr-[25px]">
              Comprar
            </button>
            <button className="text-[16px] hoverUnderLineAnimation mr-[25px]">
              Alugar
            </button>
            <button className="text-[16px] hoverUnderLineAnimation mr-[25px]">
              Lançamentos
            </button>
            <button className="text-[15px] hoverUnderLineAnimation mr-[25px]">
              Descobrir
            </button>
            <button className="text-[16px] hoverUnderLineAnimation mr-[25px]">
              Financiamento
            </button>
            <button className="text-[16px] hoverUnderLineAnimation mr-[25px]">
              Ajuda
            </button>
            <button className="text-[16px] hoverUnderLineAnimation mr-[25px]">
              Anunciar
            </button>
            <button className="w-[140px] h-[50px] text-[16px] text-[white] rounded-xl bg-blueSteel mr-[10px]">
              Criar Conta
            </button>
            <button className="w-[120px] h-[50px] text-[15px] rounded-xl text-blueSteel hover:bg-blueSteelLight hover:text-[white] flex gap-2 items-center justify-center  mr-[5px]">
              <span className="text-[24px]">
                <BsPersonUp />
              </span>
              Entrar
            </button>
          </nav>
        )}
        <nav
          className="md:hidden flex burger-menu relative"
          onClick={() => {
            toggleDropdown();
            updateMenu();
          }}
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </nav>
      </div>
      {isDropdownOpen && (
        <div
          className="md:hidden flex flex-col text-[20px] font-bold text-[graphite] mt-2 absolute top-[90px] bg-white right-0 h-fit w-full "
          style={{ zIndex: 99 }}
        >
          <div className="flex justify-end flex-col">
            <button
              className="border-y-[1px] border-lightgray py-[10px]"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className="py-[10px]"
              onClick={() => scrollToSection("skills")}
            >
              Technologies
            </button>
            <button
              className="border-y-[1px] border-lightgray py-[10px]"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="py-[10px]"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
