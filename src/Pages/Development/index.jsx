import { Layout } from "../../Components";
import About from "../../img/appl.jpeg";
import Title from "../../Components/Common/Title";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Development() {
  const i = 0;
  return (
    <Layout>
      <div className="w-full  ">
        <div className="w-full md:h-[500px]  bg-[rgba(142,254,177,0.17)]  mb-[4rem] pt-[3rem]">
          <div className="flex flex-wrap  mt-[9rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
            <div
              className={`w-full md:w-[52%] pb-[2rem] md:mr-[6rem] mb-[2rem] 
             mt-[2rem]
          `}
            >
              <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-primary ">
                Custom Application Development.
              </h4>
              <hr
                className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
              ></hr>
              <p className={`mt-[1rem] mb-[1.5rem] text-[1rem] leading-7 `}>
                At Sasom Solutions, we believe that one size does not fit all.
                That's why our ServiceNow implementation goes beyond
                out-of-the-box solutions, offering tailored and innovative
                custom app development to meet your organization's specific
                requirements.
              </p>
            </div>
            <div className="md:h-[400px] md:w-[38%] w-full -mb-[2rem] md:mt-[rem]">
              <img src={About} alt="" className="h-full object-cover w-full" />
            </div>
          </div>
        </div>
        <div className="w-full   bg-  mb-[4rem] pt-[3rem]">
          <div className="flex flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
            <Title
              text="text-primary"
              title="Why Choose SASOM Solutions?"
              bg="bg"
              border="border-primary"
            />
            <div className="flex mt-[3rem] gap-[1.5rem] bg-transparent flex-wrap ">
              <AnimatePresence>
                <motion.div
                  whileInView={{ y: [40 + (i + 3), 0] }}
                  transition={{ duration: 0.2 + i, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 text-white" />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    Identifying Unique Needs.
                  </h3>
                  <p>
                    The journey to custom app development begins with a deep
                    dive into your organization's unique needs and challenges.
                    Our consultants work closely with your team to understand
                    your workflows, pain points, and areas where existing
                    ServiceNow modules might not fully address your needs.
                  </p>
                </motion.div>
                <motion.div
                  whileInView={{ y: [40 + (i + 3), 0] }}
                  transition={{ duration: 0.2 + i, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 text-white" />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    Designing Custom Solutions
                  </h3>
                  <p>
                    Armed with insights from our needs assessment, our
                    experienced development team designs custom solutions that
                    seamlessly integrate with your ServiceNow instance. Whether
                    you require a specialized service catalog, a unique case
                    management system, or a dynamic reporting dashboard, we
                    conceptualize and design apps that align precisely with your
                    objectives.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 text-white" />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Extending ServiceNow's Capabilities
                  </h3>
                  <p>
                    ServiceNow's platform is highly extensible, and our custom
                    app development takes full advantage of this flexibility. We
                    leverage ServiceNow's Application Creator and Studio to
                    develop tailored applications that expand the platform's
                    core capabilities, providing you with a truly comprehensive
                    solution that grows alongside your organization.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 text-white" />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Workflow Automation and Integration
                  </h3>
                  User-Centric Design
                  <p>
                    User experience is paramount in our custom app development
                    process. We focus on creating intuitive, user-friendly
                    interfaces that ensure smooth navigation and seamless
                    interactions. Our apps are designed to enhance user adoption
                    and productivity, empowering your team to fully leverage the
                    new tools at their disposal.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 text-white" />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Integration with Existing Processes
                  </h3>
                  <p>
                    Our custom apps aren't standalone; they seamlessly integrate
                    with your existing processes. Whether it's integrating with
                    other ServiceNow modules, third-party tools, or legacy
                    systems, we ensure that your custom apps become a natural
                    extension of your operational ecosystem.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 text-white" />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Continuous Iteration and Enhancement
                  </h3>
                  <p>
                    Custom app development is a collaborative process. We engage
                    in ongoing dialogue with your team to gather feedback and
                    insights as you start using the apps. This iterative
                    approach allows us to make refinements, enhancements, and
                    optimizations based on real-world usage, ensuring that the
                    apps continually align with your evolving needs.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 text-white" />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Scalability and Future-Proofing
                  </h3>
                  <p>
                    Our custom app development isn't just about solving
                    immediate challenges; it's about future-proofing your
                    processes. We design apps that can scale as your
                    organization grows, accommodating increased data volume,
                    user activity, and complexity. This ensures that your
                    investment in custom app development remains valuable in the
                    long term.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 text-white" />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Demonstrable Value
                  </h3>
                  <p>
                    Custom app development isn't a mere technical exercise; it's
                    an investment in your organization's success. We work
                    closely with you to define key performance indicators (KPIs)
                    that showcase the value of the custom apps. Whether it's
                    increased efficiency, reduced response times, or improved
                    data accuracy, we measure and demonstrate the tangible
                    impact of our custom app solutions.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-center w-full mx-auto md:w-[70%] mt-[8rem] mb-[rem]">
              <p className="text-primary text-[1.5rem]">
                "Custom app development by Sasom Solutions is the epitome of
                innovation and collaboration. We go beyond standard solutions to
                craft applications that align perfectly with your organization's
                distinct needs, workflows, and objectives. Through user-centric
                design, integration with existing processes, and a commitment to
                continuous improvement, our custom apps empower your
                organization to achieve new levels of efficiency, productivity,
                and success. Contact us today, and let's embark on a journey of
                custom app development that transforms the way you operate.".
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Development;
