import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
// import Logo from "../../img/atti.png";
import { navLinks } from "../../helpers/data";
import MobileNavbar from "./MobileNavbar";

function Header({ color }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setHover] = useState(false);
  const [scroll, setScroll] = useState(false);

  const pageLink = window.location.pathname;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 200)
      );
    }
  }, []);
  return (
    <header
      className={`sticky uppercase top-0 z-[500]  shadow-sm  text-primary  ${
        scroll && "shadow "
      } ${color && "bg-transparent"}`}
    >
      <div className="flex justify-between  items-center py-8 max-w-[90%] lg:max-w-[85%] mx-auto text-sm text-black">
        <div className="flex flex-row gap-10 items-center w-full">
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

          <nav className="hidden w-[90%]  ">
            <ul className="flex gap-6 justify-end items-center w-full">
              {navLinks?.map(({ path, title, sub }, i) => (
                <li className="" key={i}>
                  <Link
                    to={path}
                    // onMouseEnter={() => setHover(true)}
                    // onMouseLeave={() => setHover(false)}
                  >
                    <span
                      className={`${
                        pageLink === path && "text-primary-shade  font-semibold"
                      } flex gap-1  relative ${
                        sub && "dropdown dropdown-hover"
                      }`}
                      h
                      onMouseEnter={() => setHover(sub && true)}
                      onMouseLeave={() => setHover(sub && false)}
                    >
                      <label
                        tabIndex="0"
                        className={`${
                          pageLink === path &&
                          "text-primary font-extrabold border-b-[2px] border-[#62d84e] pb-2"
                        } cursor-pointer hover:text-primary  text-[#032d42] text-[1rem] font-medium`}
                      >
                        {title}
                      </label>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* mobile menu start */}
        <MenuAlt3Icon
          className=" w-8 text-primary-shade cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        {menuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 h-screen w-full  bg-[#0000003d] z-[99999]"
            onClick={() => setMenuOpen(false)}
          >
            <AnimatePresence>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                className="fixed top-0 right-0 w-[200px] bg-[#f9f9f9] h-screen overflow-y-scroll"
                onClick={(e) => e.stopPropagation()}
              >
                <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        {/* mobile menu end */}
      </div>
    </header>
  );
}

export default Header;
