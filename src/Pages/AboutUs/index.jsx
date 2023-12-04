import { AboutHero, Layout, SecondRow } from "../../Components";
import Title from "../../Components/Common/Title";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/solid";

function AboutUs() {
  const i = 0;
  return (
    <Layout>
      <AboutHero
        mt={true}
        text="At Sasom Solutions, we are dedicated to transforming businesses through the power of ServiceNow. As a ServiceNow consulting firm, we specialize in providing cutting-edge solutions that streamline operations, enhance efficiency, 
        and elevate the overall service experience for our clients."
      />
      <SecondRow />
      <div className="w-full   bg-[rgba(142,254,177,0.17)]  mb-[4rem] pt-[3rem]">
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
                className=" w-[90%] sm:w-[31%] rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
              >
                <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                  <CheckCircleIcon className="w-6 text-white" />
                </h3>
                <h3 className="font-bold text-[1.5rem] mb-[1rem]">Expertise</h3>
                <p>
                  Our team of seasoned ServiceNow consultants brings a wealth of
                  experience to the table. From IT service management and HR
                  workflows to customer service and beyond, we have the know-how
                  to tailor ServiceNow to your unique requirements.
                </p>
              </motion.div>
              <motion.div
                whileInView={{ y: [40 + (i + 3), 0] }}
                transition={{ duration: 0.2 + i, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] sm:w-[31%]  rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
              >
                <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                  <CheckCircleIcon className="w-6 text-white" />
                </h3>
                <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                  Custom Solutions
                </h3>
                <p>
                  We understand that every business is unique. That's why we
                  don't believe in one-size-fits-all solutions. Our experts
                  collaborate closely with you to design and implement
                  customized ServiceNow solutions that align perfectly with your
                  processes and goals.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] sm:w-[31%]  rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
              >
                <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                  <CheckCircleIcon className="w-6 text-white" />
                </h3>
                <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                  {" "}
                  End-to-End Support
                </h3>
                <p>
                  From initial consultation to deployment and ongoing support,
                  we are your dedicated partners throughout the entire journey.
                  We're here to ensure a seamless transition to ServiceNow and
                  provide continuous assistance as your business evolves.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] sm:w-[31%] rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
              >
                <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                  <CheckCircleIcon className="w-6 text-white" />
                </h3>
                <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                  {" "}
                  Innovation
                </h3>
                <p>
                  The technology landscape is ever-evolving, and so are we. We
                  stay at the forefront of ServiceNow advancements, integrating
                  the latest features and best practices into our solutions.
                  With ElevateTech Solutions, you're always ahead of the curve.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] sm:w-[31%]  rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
              >
                <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                  <CheckCircleIcon className="w-6 text-white" />
                </h3>
                <h3 className="font-bold text-[1.5rem] mb-[1rem]">
                  {" "}
                  Client-Centric Approach
                </h3>
                <p>
                  Your success is our success. We prioritize open communication
                  and collaboration to truly understand your challenges and
                  aspirations. Our solutions are designed to empower your team,
                  enhance user experiences, and deliver tangible results.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] sm:w-[31%] rounded-[5px] mb-[2rem]   bg-white hover:bg-primary hover:text-white text-primary  p-[2rem]"
              >
                <h3 className="text-primary bg-accent p-1 rounded-md w-fit h-fit">
                  <CheckCircleIcon className="w-6 text-white" />
                </h3>
                <h3 className="font-bold text-[1.5rem] mb-[1rem]"> Distinct</h3>
                <p>
                  We are thorough and unique in our dealings. we birth
                  disruptive strategies for exceptional results
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
