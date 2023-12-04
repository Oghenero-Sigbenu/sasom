import { Layout } from "../../Components";
import About from "../../Assests/train.jpeg";
import Title from "../../Components/Common/Title";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Training() {
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
                Training and Support: Empowering Your Team for Success
              </h4>
              <hr
                className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
              ></hr>
              <p className={`mt-[1rem] mb-[1.5rem] text-[1rem] leading-7 `}>
                At Sasom Solutions, our commitment to your organization's
                success extends far beyond the implementation phase. We
                understand that introducing new technology like ServiceNow
                involves not only technical deployment but also empowering your
                team with the skills and resources they need to fully leverage
                the platform's potential.
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
            <div className="flex mt-[3rem] bg-transparent flex-wrap  gap-[1.5rem]">
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
                    Tailored Training Programs
                  </h3>
                  <p>
                    Our training approach is built on the principle of
                    customization. We recognize that different teams within your
                    organization have varying levels of familiarity with
                    ServiceNow and diverse training needs. Our experienced
                    trainers work closely with your team leads to design
                    tailored training programs that address specific roles,
                    responsibilities, and skill levels.
                  </p>
                </motion.div>
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
                    Comprehensive User Training
                  </h3>
                  <p>
                    We offer comprehensive user training sessions that cover a
                    wide range of topics, from basic navigation to advanced
                    process workflows. Whether your team is in IT, HR, customer
                    service, or any other department, we ensure they have the
                    knowledge and confidence to use ServiceNow effectively. This
                    training is designed to promote user adoption and minimize
                    any learning curve.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Hands-On Workshops
                  </h3>
                  <p>
                    Theory only goes so far; practical application is key. Sasom
                    Solutions conducts hands-on workshops where your team can
                    engage with ServiceNow in a controlled environment. These
                    workshops enable users to practice what they've learned, ask
                    questions, and gain real-world experience that boosts their
                    proficiency.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Administrator Training
                  </h3>
                  <p>
                    For your administrators and IT personnel, we offer in-depth
                    training on configuring, maintaining, and optimizing your
                    ServiceNow instance. This empowers your internal
                    administrators to take ownership of the platform, make
                    necessary adjustments, and keep your processes aligned with
                    evolving business needs.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Post-Implementation Support
                  </h3>
                  <p>
                    Our support doesn't end when the training does. We provide
                    ongoing post-implementation support to address any
                    questions, concerns, or challenges that arise as your team
                    starts using ServiceNow. Whether it's clarifying a process,
                    troubleshooting an issue, or simply providing guidance, our
                    support team is just a call or message away.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Continuous Learning Resources
                  </h3>
                  <p>
                    We equip your team with a wealth of learning resources that
                    extend beyond the initial training. This includes
                    documentation, video tutorials, knowledge bases, and user
                    forums. Our goal is to ensure that your team has easy access
                    to information and assistance whenever they need it.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    Evolving Support
                  </h3>
                  <p>
                    As your organization evolves, so do your needs. Sasom
                    Solutions is here to support you through those changes.
                    Whether you're adding new functionalities, integrating
                    additional systems, or expanding your ServiceNow usage to
                    new departments, we provide guidance and support to ensure a
                    seamless transition.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full md:w-[31%] shadow-md rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
                >
                  <h3 className=" bg-accent p-1 rounded-md w-fit h-fit">
                    <CheckCircleIcon className="w-6 " />
                  </h3>
                  <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                    {" "}
                    User Feedback Integration
                  </h3>
                  <p>
                    We value user feedback as a valuable source of insights. Our
                    support team actively listens to user input, questions, and
                    suggestions. This feedback loop informs our continuous
                    improvement efforts, helping us refine processes, enhance
                    training materials, and optimize the overall ServiceNow
                    experience for your organization.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-center w-full mx-auto md:w-[70%] mt-[8rem] mb-[rem]">
              <p className="text-[1.5rem]">
                "Training and support by Sasom Solutions isn't just a service;
                it's a commitment to your organization's ongoing success.
                Through tailored training, hands-on workshops, continuous
                learning resources, and post-implementation support, we empower
                your team to confidently embrace ServiceNow and use it to its
                fullest potential. Our unwavering assistance ensures that your
                organization's ServiceNow journey is marked by efficiency,
                productivity, and a seamless user experience. Contact us today,
                and let's embark on a partnership that equips your team for a
                successful future with ServiceNow.".
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Training;
