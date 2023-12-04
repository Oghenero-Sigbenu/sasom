import { Layout } from "../../Components";
import About from "../../img/process.jpeg";
import Title from "../../Components/Common/Title";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Process() {
  const i = 0;
  return (
    <Layout>
      <div className="w-full  ">
        <div className="w-full md:h-[500px]  bg-[rgba(142,254,177,0.17)]  mb-[4rem] pt-[3rem]">
          <div className="flex flex-wrap  mt-[8rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
            <div
              className={`w-full md:w-[52%] pb-[2rem] md:mr-[6rem] mb-[2rem] 
           mt-[2rem]
        `}
            >
              <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-primary ">
                ServiceNow Process Optimization
              </h4>
              <hr
                className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
              ></hr>
              <p className={`mt-[1rem] mb-[1.5rem] text-[1rem] leading-7 `}>
                At Sasom Solutions, our commitment to process optimization is at
                the heart of our ServiceNow implementation approach. We
                recognize that a successful implementation isn't just about
                adopting new technology; it's about fundamentally reimagining
                and enhancing your business processes for optimal efficiency and
                effectiveness.
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
                    In-Depth Process Analysis
                  </h3>
                  <p>
                    Our process optimization journey begins with a meticulous
                    analysis of your existing workflows. Our skilled consultants
                    work closely with your team to gain an in-depth
                    understanding of your processes, pain points, bottlenecks,
                    and opportunities for improvement. We don't just automate
                    existing processes; we strategically rethink them for
                    enhanced outcomes.
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
                    Streamlining and Automation
                  </h3>
                  <p>
                    Once we have a clear picture of your processes, we leverage
                    ServiceNow's powerful automation capabilities to streamline
                    and optimize these workflows. We identify manual, repetitive
                    tasks that can be automated, reducing human error,
                    increasing speed, and freeing up your workforce to focus on
                    high-value activities. Through workflow automation, we
                    eliminate unnecessary steps, leading to quicker and more
                    consistent outcomes.
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
                    Custom Workflows and Approval Processes
                  </h3>
                  <p>
                    Sasom Solutions understands that every organization has
                    unique processes. We design custom workflows and approval
                    processes within ServiceNow that mirror your specific
                    requirements. Whether it's IT service requests, employee
                    onboarding, change management, or incident resolution, our
                    consultants tailor these processes to align seamlessly with
                    your business goals.
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
                    Data-Driven Decision Making
                  </h3>
                  <p>
                    Process optimization isn't guesswork; it's driven by data.
                    We leverage ServiceNow's reporting and analytics
                    capabilities to gather insights into your processes'
                    performance. This data empowers your organization to make
                    informed decisions about process enhancements, resource
                    allocation, and strategic planning. By analyzing trends and
                    patterns, we continually refine processes to achieve better
                    outcomes.
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
                    Collaboration and Communication
                  </h3>
                  <p>
                    Effective process optimization goes beyond automation; it
                    involves improved collaboration and communication. Sasom
                    Solutions enhances your workflows to promote better
                    communication between teams and departments. ServiceNow's
                    collaboration features enable real-time information sharing,
                    reducing delays and ensuring that everyone is on the same
                    page.
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
                    Continuous Improvement
                  </h3>
                  <p>
                    Process optimization is an ongoing journey. Sasom Solutions
                    doesn't just optimize processes during the initial
                    implementation; we instill a culture of continuous
                    improvement within your organization. We work with you to
                    establish feedback loops, regularly assess performance, and
                    make iterative refinements to ensure that your processes
                    remain aligned with evolving business needs.
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
                    Measurable Outcomes
                  </h3>
                  <p>
                    Our process optimization efforts are focused on delivering
                    measurable outcomes. Through ServiceNow's reporting and
                    analytics, we track key performance indicators such as
                    response times, resolution rates, and customer satisfaction.
                    This data-driven approach allows us to showcase the tangible
                    impact of process optimization on your organization's
                    efficiency, productivity, and bottom line.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-center w-full mx-auto md:w-[70%] mt-[8rem] mb-[rem]">
              <p className="text-[1.5rem]">
                "ServiceNow Process optimization is at the core of what we do at
                Sasom Solutions. Our ServiceNow implementation doesn't stop at
                technology; it's about fundamentally transforming the way you
                operate. By analyzing, reengineering, and automating your
                processes, we empower your organization to achieve greater
                efficiency, faster response times, reduced costs, and enhanced
                customer satisfaction. Contact us today, and let's collaborate
                on revolutionizing your processes for a more streamlined and
                successful future".
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Process;
