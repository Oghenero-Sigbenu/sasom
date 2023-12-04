import { Layout } from "../../Components";
import consult from "../../Assests/consult.jpeg";

function Consult() {
  return (
    <Layout>
      <div className="w-full  ">
        <div className="w-full md:h-[480px]  bg-[rgba(142,254,177,0.17)]  mb-[4rem] pt-[3rem]">
          <div className="flex flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
            <div
              className={`w-full md:w-[52%] pb-[1rem] md:mr-[6rem] mb-[2rem] 
             mt-[5rem]
          `}
            >
              <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-primary ">
                ServiceNow Consulting Services
              </h4>
              <hr
                className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
              ></hr>
              <p className={`mt-[1rem] mb-[1.5rem] text-[1rem] leading-7 `}>
                Sasom offers professional services to help companies get the
                most out of their ServiceNow solutions. Our team of experts
                provides advice on best practices, implementation,
                customization, and training to ensure your organization is
                getting the most out of ServiceNow. We specialize in helping
                clients get the most out of their ServiceNow investments, and
                our goal is to make sure you are getting the most out of your
                ServiceNow investment.
              </p>
            </div>
            <div className="md:h-[400px] md:w-[38%] w-full -mb-[4rem] md:mt-[4rem]">
              <img
                src={consult}
                alt=""
                className="h-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Consult;
