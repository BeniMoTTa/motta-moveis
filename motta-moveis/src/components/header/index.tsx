import React, { useState } from "react";
import logo from "../../assets/LogoMottaImoveis.png";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
    <header className=" w-full h-[90px] flex bg-[yellow]">
      <div className="w-[95%] allign px-[2%] h-full bg-[#fff] text-[pink] flex items-center justify-between">
        <img src={logo} alt="" className="w-[160px]" />
        {}
        <nav className="hidden md:flex text-[18px] font-bold text-[graphite]">
          <button
            className="hoverUnderLineAnimation mr-[20px]"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="hoverUnderLineAnimation mr-[20px]"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className="hoverUnderLineAnimation mr-[20px]"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="hoverUnderLineAnimation"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>
        <nav
          className="md:hidden flex burger-menu relative"
          onClick={() => {
            dropdownButtonHandler();
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
              className=" py-[10px]"
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
              className=" py-[10px]"
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
