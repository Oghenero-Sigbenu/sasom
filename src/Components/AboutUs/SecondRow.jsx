import About1 from "../../img/cowork.jpeg";

function SecondRow() {
  return (
    <div className="flex-reverse flex flex-wrap flex-row-reverse md:flex-row mb-[4rem] mt-[8rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
      <div className="mb-[4rem]  md:h-[400px] w-full  md:w-[50%]">
        <img src={About1} alt="" className="md:h-full w-full  object-cover" />
      </div>
      <div className="md:w-[40%] mb-[4rem] w-full  md:ml-[6rem] flex items-center">
        <div className="   ">
          <h4 className="text-[1.5rem] md:text-[2rem]  leading-8 font-extrabold text-primary">
            OUR MISSION
          </h4>
          <hr
            className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
          ></hr>
          <p className="mt-[1rem]  text-[1rem] leading-7">
            Our mission is simple yet profound – to empower organizations to
            unleash their full potential by harnessing the capabilities of
            ServiceNow. We believe that modern businesses deserve modern
            solutions, and that's where our expertise comes into play. Through
            our strategic guidance, technical prowess, and unwavering
            commitment, we help businesses revolutionize the way they operate
            and deliver value to their customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondRow;
