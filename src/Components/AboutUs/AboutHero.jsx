import { NavLink } from "react-router-dom";
import About from "../../img/side.jpeg";

function AboutHero({ text, mt, text2, more }) {
  return (
    <div className="w-full md:h-[480px]  bg-[rgba(142,254,177,0.17)]  mb-[4rem] pt-[3rem]">
      <div className="flex flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div
          className={`w-full md:w-[52%] pb-[1rem] md:mr-[6rem] mb-[2rem] ${
            mt && "mt-[5rem]"
          }`}
        >
          <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-primary ">
            ABOUT US
          </h4>
          <hr
            className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
          ></hr>
          <p className={`mt-[1rem] mb-[1.5rem] text-[1rem] leading-7 `}>
            {text}
          </p>
          <p className="mb-[1.5rem]">{text2}</p>
          {more && (
            <NavLink
              to="/about-us"
              className="bg-primary text-white px-[1rem] py-[.5rem] mt-[.5rem]"
            >
              View more
            </NavLink>
          )}
        </div>
        <div className="md:h-[400px] md:w-[38%] w-full -mb-[4rem] md:mt-[4rem]">
          <img src={About} alt="" className="h-full object-cover w-full" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
