import React from "react";
import { useState, useEffect } from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavBar from "./MobileNavbar";

function FixedNav({ fix = true }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navigate = useNavigate();

  const handleOpenSidebar = () => {
    setActiveMenu(!activeMenu);
  };
  const handleNavigate = () => {
    navigate("/");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 200)
      );
    }
  }, []);
  const pageLink = window.location.pathname;
  return (
    <header
      className={`bg-white w-full shadow-lg text-[#101828] ${
        scroll && "shadow-lg"
      }`}
    >
      <div
        className={`fixed z-[99999]   w-full h-[80px] ${
          fix ? "flex" : "hidden"
        } ${"bg-white text-[#101828]"}`}
      >
        <div className="flex w-full  md:w-[85%] max-w-[90%] lg:max-w-[85%] justify-between items-center mx-auto ">
          <div
            className="flex items-center cursor-pointer mr-[35px]"
            onClick={handleNavigate}
          >
            <Link
              to="/"
              className="flex bg-whit rounded-[10px] w-400px] px-[1rem] py-[.3rem]"
            >
              <div>
                {/* <p>LOGO</p> */}
                {/* <img src={Logo} alt="logo" className="w-[50px]" /> */}
              </div>
              <p className="text-[.8rem] leading-3 ml-3 font-extrabold  text-primary-shade  w-[250px]">
                SASOM Solutions <br></br>
                Incorporate Inc.<br></br>
                <span className="text-primary font-light"></span>
              </p>
            </Link>
          </div>

          <div className="">
            <MenuAlt3Icon
              onClick={handleOpenSidebar}
              className=" w-8 text-primary-shade cursor-pointer"
              size={24}
            />
          </div>
        </div>
      </div>
      {activeMenu && (
        <div
          className="fixed left-0 right-0 bottom-0 h-screen w-full  bg-[#0000003d] z-[99999]"
          onClick={() => handleOpenSidebar()}
        >
          <AnimatePresence>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              className="fixed top-0 right-0 w-[200px] bg-[#f9f9f9] h-screen overflow-y-scroll"
              onClick={(e) => e.stopPropagation()}
            >
              <MobileNavBar
                setMenuOpen={handleOpenSidebar}
                pageLink={pageLink}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </header>
  );
}

export default FixedNav;
