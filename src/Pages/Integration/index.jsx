import { Layout } from "../../Components";
import About from "../../img/white.jpeg";
import Title from "../../Components/Common/Title";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Integration() {
  const i = 0;
  return (
    <Layout>
      <div className="w-full  ">
        <div className="w-full md:h-[500px]  bg-[rgba(142,254,177,0.17)]  mb-[4rem] pt-[3rem]">
          <div className="flex flex-wrap  mt-[7rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
            <div
              className={`w-full md:w-[52%] pb-[2rem] md:mr-[6rem] mb-[2rem] 
             mt-[2rem]
          `}
            >
              <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-primary ">
                Integration Services
              </h4>
              <hr
                className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
              ></hr>
              <p className={`mt-[1rem] mb-[1.5rem] text-[1rem] leading-7 `}>
                At Elaxs Solutions, we recognize that modern businesses rely on
                a diverse range of tools and systems to operate efficiently. Our
                integration services seamlessly connect ServiceNow with your
                existing software solutions, enabling a harmonious and unified
                ecosystem that enhances productivity, data accuracy, and
                collaboration.
              </p>
            </div>
            <div className="md:h-[400px] md:w-[38%] w-full -mb-[4rem] md:mt-[4rem]">
              <img src={About} alt="" className="h-full object-cover w-full" />
            </div>
          </div>
        </div>
        <div className="w-full   bg-  mb-[4rem] pt-[3rem]">
          <div className="flex flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
            <Title
              text="text-primary"
              title="SERVICES"
              bg="bg"
              border="border-primary"
            />
            <div className="flex mt-[3rem] gap-[1.5rem] bg-transparent flex-wrap ">
              <AnimatePresence>
                <motion.div
                  whileInView={{ y: [40 + (i + 3), 0] }}
                  transition={{ duration: 0.2 + i, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className=" w-full  lg:w-[32%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    System Connectivity Assessment
                  </h3>
                  <p>
                    Our integration journey begins with a comprehensive
                    assessment of your organization's existing systems and
                    tools. We work closely with your IT and process teams to
                    understand your technological landscape, identifying the
                    various applications, databases, and platforms that need to
                    communicate with ServiceNow.
                  </p>
                </motion.div>
                <motion.div
                  whileInView={{ y: [40 + (i + 3), 0] }}
                  transition={{ duration: 0.2 + i, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full lg:w-[32%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    Designing Integration Workflows.
                  </h3>
                  <p>
                    Once we have a clear understanding of your system landscape,
                    our experienced integration specialists design custom
                    integration workflows that ensure smooth data exchange
                    between ServiceNow and your other systems. These workflows
                    are tailored to your specific business processes, ensuring
                    that information flows seamlessly and in real-time.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full lg:w-[32%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Real-Time Data Exchange
                  </h3>
                  <p>
                    Integration services by Elaxs Solutions prioritize real-time
                    data exchange. Whether it's synchronizing data between
                    ServiceNow and your CRM, ERP, or other enterprise systems,
                    our integrations ensure that all relevant parties have
                    access to accurate and up-to-date information, minimizing
                    data discrepancies and streamlining decision-making.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full lg:w-[32%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Automation of Cross-Platform Activities
                  </h3>
                  <p>
                    Our integration services extend beyond data exchange; we can
                    automate cross-platform activities. For example, an incident
                    reported in ServiceNow can trigger automated notifications
                    in your communication tool, ensuring that relevant teams are
                    promptly informed. This automation reduces manual
                    intervention, accelerates processes, and minimizes the risk
                    of errors .
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full lg:w-[32%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Custom APIs and Connectors
                  </h3>
                  <p>
                    Elaxs Solutions creates custom APIs and connectors that
                    bridge the gap between ServiceNow and your other systems.
                    These APIs are designed with security, performance, and
                    scalability in mind, ensuring that your integrations are
                    robust and future-proof.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full lg:w-[32%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Third-Party Integrations
                  </h3>
                  <p>
                    In addition to internal system integration, we also
                    facilitate third-party integrations that enhance your
                    organization's capabilities. Whether it's integrating with
                    external service providers, data sources, or
                    industry-specific platforms, we ensure that your ServiceNow
                    instance is seamlessly connected to the broader digital
                    landscape.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full lg:w-[32%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Monitoring and Maintenance
                  </h3>
                  <p>
                    Our commitment doesn't end once the integrations are in
                    place. We provide ongoing monitoring and maintenance to
                    ensure that your integrations continue to function
                    optimally. If any issues arise, our support team is ready to
                    diagnose and address them swiftly, minimizing disruption to
                    your operations.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full lg:w-[32%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Scalability and Flexibility
                  </h3>
                  <p>
                    As your organization grows and evolves, our integration
                    services scale with you. Whether you're adding new systems,
                    expanding into new markets, or introducing additional tools,
                    our integrations are designed to adapt and accommodate your
                    changing needs.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-center w-full mx-auto md:w-[70%] mt-[8rem] mb-[rem]">
              <p className="text-[1.5rem]">
                "Integration services by Elaxs Solutions create a cohesive
                digital ecosystem where ServiceNow seamlessly interacts with
                your existing systems and tools. Through real-time data
                exchange, automation, and custom APIs, we empower your
                organization to harness the full potential of ServiceNow within
                a unified and interconnected landscape. Contact us today, and
                let's collaborate on integrating ServiceNow to amplify your
                operational efficiency, data accuracy, and collaboration
                capabilities.".
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Integration;
