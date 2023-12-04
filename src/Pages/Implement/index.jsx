import { Layout } from "../../Components";
import About from "../../img/team.jpeg";
import Title from "../../Components/Common/Title";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Implement() {
  const i = 0;
  return (
    <Layout>
      <div className="w-full  ">
        <div className="w-full md:h-[500px]  bg-[rgba(142,254,177,0.17)]  mb-[4rem] pt-[3rem]">
          <div className="flex flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
            <div
              className={`w-full md:w-[52%] pb-[2rem] md:mr-[6rem] mb-[2rem] 
             mt-[2rem]
          `}
            >
              <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-primary ">
                ServiceNow Implementation
              </h4>
              <hr
                className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
              ></hr>
              <p className={`mt-[1rem] mb-[1.5rem] text-[1rem] leading-7 `}>
                ServiceNow implementation by Sasom Solutions isn't just about
                deploying software; it's a holistic approach that blends
                technology, strategy, and collaboration. We are your partners on
                the journey to transform your organization, utilizing
                ServiceNow's capabilities to elevate efficiency, innovation, and
                overall success. Contact us today, and let's embark on a
                transformative ServiceNow implementation tailored to your
                organization's unique aspirations.
              </p>
              <p>
                At Sasom Solutions, we understand that successful ServiceNow
                implementation goes beyond just setting up the software. Our
                comprehensive approach ensures that your organization
                experiences a seamless transition to ServiceNow, tailored to
                your unique needs and goals.
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
              title="Why Choose SASOM Solutions?"
              bg="bg"
              border="border-primary"
            />
            <div className="flex mt-[3rem] justify-between bg-transparent flex-wrap ">
              <AnimatePresence>
                <motion.div
                  whileInView={{ y: [40 + (i + 3), 0] }}
                  transition={{ duration: 0.2 + i, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    Assessment and Strategy Development
                  </h3>
                  <p>
                    Our journey begins with a thorough needs assessment. We take
                    the time to understand your organization's pain points,
                    goals, and processes. Our experienced consultants work
                    closely with your team to identify areas that can benefit
                    from ServiceNow's capabilities. This collaborative approach
                    lays the foundation for a strategy that aligns technology
                    with your business objectives.
                  </p>
                </motion.div>
                <motion.div
                  whileInView={{ y: [40 + (i + 3), 0] }}
                  transition={{ duration: 0.2 + i, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%]  shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    Customization and Configuration
                  </h3>
                  <p>
                    One of the hallmarks of our implementation process is
                    customization. We believe that ServiceNow should adapt to
                    your organization, not the other way around. Our experts
                    leverage ServiceNow's extensive customization capabilities
                    to tailor workflows, forms, and processes to match your
                    specific requirements. This ensures that the solution
                    seamlessly integrates into your existing ecosystem,
                    promoting user adoption and minimizing disruption.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%]  shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Seamless Data Migration
                  </h3>
                  <p>
                    Transferring data from legacy systems is a critical yet
                    complex task. Sasom Solutions ensures a seamless data
                    migration process, meticulously mapping and transferring
                    your valuable data into ServiceNow. Our data migration
                    specialists prioritize data accuracy, integrity, and
                    security, ensuring that historical information is preserved
                    and readily accessible within the new platform.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%]  shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Workflow Automation and Integration
                  </h3>
                  <p>
                    ServiceNow's true power lies in its ability to automate
                    workflows and integrate disparate systems. Our team designs
                    and implements automated processes that eliminate manual,
                    repetitive tasks, freeing up your workforce to focus on
                    value-added activities. We seamlessly integrate ServiceNow
                    with your existing tools and applications, creating a
                    unified environment that boosts productivity and
                    collaboration.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%]  shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    User Training and Change Management
                  </h3>
                  <p>
                    A successful implementation extends beyond technology; it
                    involves your people. Sasom Solutions provides comprehensive
                    user training to empower your staff with the skills needed
                    to navigate and leverage ServiceNow effectively. Our change
                    management strategies ensure a smooth transition, minimizing
                    resistance and maximizing adoption across all levels of your
                    organization.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%]  shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Ongoing Support and Optimization
                  </h3>
                  <p>
                    Our commitment doesn't end at deployment. We provide
                    continuous support to address any issues, concerns, or
                    questions that may arise post-implementation. As your
                    organization evolves, we collaborate to fine-tune processes,
                    optimize workflows, and integrate new features that align
                    with changing business needs. Our proactive approach ensures
                    that ServiceNow remains a dynamic and integral part of your
                    operations.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Implement;
