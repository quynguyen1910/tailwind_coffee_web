import { getIcon, getImage } from "../ultils";

const Header = () => {
  const menuHeader = [
    "home",
    "OUR PRODUCTS",
    "BLOG",
    "ABOUT",
    "CONTACT",
    "STYLEGUIDE",
  ];
  const clickMenu = () => {
    const nodeMenu = document.querySelector("header nav ul");
    nodeMenu.classList.toggle("md:-translate-y-full");
    nodeMenu.classList.toggle("sm:-translate-y-full");
  };
  return (
    <header>
      <div className="ct-container relative z-10">
        <nav className="relative flex items-center justify-between py-6 text-xs md:px-8 sm:px-8 gap-5 bg-white">
          <a className="header-logo w-28 cursor-pointer">
            <img src={getImage("logo.png")} alt="logo" />
          </a>
          <ul
            className="header-menu flex items-center justify-between font-bold gap-8 uppercase tracking-widest transition-all duration-500 bg-white
        ct-menu md:-translate-y-full  sm:-translate-y-full
        "
          >
            {menuHeader.map((item, index) => {
              return (
                <li key={index} className="relative md:p-4 sm:p-4">
                  <a
                    className="block opacity-50 hover:opacity-100 transition-all duration-200 peer"
                    href="#"
                  >
                    {item}
                  </a>
                  <div className="bg-underlineMenu h-0.5 w-0 absolute -bottom-1.5 left-0 lg:peer-hover:w-full transition-all duration-300"></div>
                </li>
              );
            })}
          </ul>
          <div className="md:ml-auto sm:ml-auto">
            <a
              href="#"
              className="header-cart flex items-center justify-between gap-2 uppercase font-bold opacity-50 hover:opacity-100 cursor-pointer"
            >
              <div>
                <img className="ct-icon" src={getIcon("cart.svg")} alt="cart" />
              </div>
              <span>cart</span>
              <span className="inline-block bg-black text-white font-bold p-1 rounded-full">
                10
              </span>
            </a>
          </div>
          <div
            onClick={clickMenu}
            className="cursor-pointer opacity-50 hover:opacity-100 lg:hidden"
          >
            <img
              className="ct-icon"
              src={getIcon("menu.svg")}
              alt="menu-button"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
