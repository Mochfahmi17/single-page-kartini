import { useContext, useEffect, useState } from "react";
import { BackgroundContext } from "../context/BackgroundContext";

import logo_white from "../assets/img/logo-79-white.svg";
import logo from "../assets/img/logo-original.svg";

const NavbarComponents = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { toggleBackground, bgRed } = useContext(BackgroundContext);

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "translate-x-0" : "translate-x-full";

  let menuActiveScroll = scroll
    ? "bg-white dark:bg-white dark:md:bg-transparent"
    : "bg-white dark:md:bg-transparent dark:bg-red-700";

  let toggleHamburger = show
    ? "ri-close-large-line text-red-700"
    : "ri-menu-2-line";

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  }, []);

  let changeLogo = bgRed && !scroll ? logo_white : logo;

  let scrollActive = scroll ? "py-6 bg-white shadow" : "";

  let textdarkScroll = scroll
    ? "dark:text-slate-700 dark:hover:text-red-800"
    : "dark:text-white";

  let bgToggle = scroll ? "dark:bg-slate-400" : "dark:bg-slate-800";

  let changeColorCircle = bgRed ? "bg-red-700" : "bg-white";

  return (
    <>
      <header
        className={`${scrollActive} header animate__animated animate__fadeInDown fixed z-50 w-full py-4 transition-all`}
      >
        <div className="container mx-auto px-4 md:px-10">
          <div className="navbar-box flex items-center justify-between">
            <div className="logo">
              <a href="#">
                <img
                  src={changeLogo}
                  className="w-36 md:w-40 lg:w-[150px]"
                  alt="79 Indonesia Maju"
                />
              </a>
            </div>
            <ul
              className={`${menuActive} ${menuActiveScroll} absolute right-0 top-full flex flex-col gap-5 px-8 py-6 shadow-lg transition-all md:relative md:h-full md:w-auto md:translate-x-0 md:flex-row md:gap-3 md:p-0 md:shadow-none lg:gap-10`}
            >
              <li className="flex items-center">
                <a
                  href="#home"
                  className={`text-xs font-medium opacity-75 transition-all hover:text-red-700 dark:hover:text-opacity-75 lg:text-sm ${textdarkScroll} dark:opacity-100`}
                >
                  Beranda
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#about"
                  className={`text-xs font-medium opacity-75 transition-all hover:text-red-700 dark:hover:text-opacity-75 lg:text-sm ${textdarkScroll} dark:opacity-100`}
                >
                  Biografi Kartini
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#surat"
                  className={`text-xs font-medium opacity-75 transition-all hover:text-red-700 dark:hover:text-opacity-75 lg:text-sm ${textdarkScroll} dark:opacity-100`}
                >
                  Surat-surat Kartini
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#timeline"
                  className={`text-xs font-medium opacity-75 transition-all hover:text-red-700 dark:hover:text-opacity-75 lg:text-sm ${textdarkScroll} dark:opacity-100`}
                >
                  Timeline Perjuangan Kartini
                </a>
              </li>
            </ul>
            <li className="flex items-center">
              <span className={`mr-2 text-xs ${textdarkScroll} md:text-sm`}>
                Light
              </span>
              <input
                type="checkbox"
                id="red-toggle"
                onClick={toggleBackground}
                className="hidden"
              />
              <label htmlFor="red-toggle">
                <div
                  className={`flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-400 p-1 ${bgToggle}`}
                >
                  <div
                    className={`toggle-circle h-4 w-4 rounded-full ${changeColorCircle} transition duration-300 ease-in-out`}
                  ></div>
                </div>
              </label>
              <span className={`ml-2 text-xs ${textdarkScroll} md:text-sm`}>
                Red
              </span>
              <div className="extra-navbar ml-5 md:m-0 md:hidden">
                <i
                  onClick={handleClick}
                  className={`${toggleHamburger} ${textdarkScroll} cursor-pointer text-3xl md:hidden`}
                ></i>
              </div>
            </li>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarComponents;
