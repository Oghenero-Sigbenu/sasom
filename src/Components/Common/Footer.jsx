import { mediaLinks } from "../../helpers/data";
// import Logo from "../../img/atti.png";
function Footer() {
  return (
    <footer className="bg-primary w-full py-5 ">
      <div className="flex flex-row flex-wrap max-w-[90%] lg:max-w-[85%] mx-auto"></div>
      <div className="max-w-[90%] lg:max-w-[80%] mt-9 mx-auto  p-4 border-t flex justify-">
        <div className=" w-full   md:w-[50%] mb- ">
          {/* <img src={Logo} alt="Rasmin" className="object-contain w-[100px] " /> */}
          <div className="flex ">
            <p className="text-[.8rem] leading- ml-3 font-extrabold  text-primary-shade  w-[px]">
              SASOM Solutions <br></br>
              Incorporate Inc.<br></br>
              <span className="text-primary font-light"></span>
            </p>
            <div className=" ml-4 mt-">
              {mediaLinks?.map(({ path, title, icon }, i) => (
                <a
                  key={i}
                  target="_blank"
                  href="/home"
                  className="cursor-pointer "
                  rel="noreferrer"
                >
                  <img
                    src={icon}
                    alt={`CYON ${title}`}
                    className="w-7 h-7 md:w-10 md:h-10  p-1 md:p-2 bg-white  rounded-full grayscale hover:grayscale-0 hover:scale-110  hover:-translate-y-1 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[#ffffffd0] text-sm text-center">
          &copy; SASOM - 2023 | All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
