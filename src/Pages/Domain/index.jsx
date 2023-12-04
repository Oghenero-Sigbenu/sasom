import { Layout } from "../../Components";
import About from "../../img/domain.jpeg";
import Title from "../../Components/Common/Title";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Domain() {
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
                ServiceNow Domain Management
              </h4>
              <hr
                className={`w-[90px] mx-left border-b mt-3 text-left  border-4 border-primary`}
              ></hr>
              <p className={`mt-[1rem] mb-[1.5rem] text-[1rem] leading-7 `}>
                ServiceNow is a cloud-based platform that offers a wide range of
                IT service management (ITSM) and business process automation
                solutions. Domain Management is one of the many capabilities
                within the ServiceNow platform. It refers to the practice of
                organizing and managing different business areas or functions as
                separate domains, each with its own set of configuration, data,
                and processes.
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
                    Domain Separation
                  </h3>
                  <p>
                    ServiceNow allows you to create separate domains, which are
                    isolated instances of the platform, within a single
                    ServiceNow instance. Each domain can have its own data,
                    configuration settings, users, roles, and processes. This
                    separation is particularly useful for organizations that
                    want to manage multiple business units, departments, or even
                    distinct client environments within a single ServiceNow
                    instance.
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
                    Security and Data Isolation:
                  </h3>
                  <p>
                    Domain Management ensures that data from one domain is
                    isolated from other domains. This is crucial for maintaining
                    data integrity and security. User access is controlled based
                    on the domain they belong to, preventing unauthorized access
                    to data in different domains.
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
                    Customization and Configuration
                  </h3>
                  <p>
                    Domains can be customized independently, allowing each
                    business unit or department to tailor the platform to their
                    specific needs. Customizations made in one domain do not
                    affect the behavior or configurations of other domains.
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
                    Processes and Workflows
                  </h3>
                  <p>
                    Each domain can define its own processes, workflows, and
                    business rules. This enables different teams to manage their
                    unique processes without interfering with others. For
                    example, the IT team can have its own incident management
                    process in one domain, while the HR team can manage employee
                    onboarding processes in another.
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
                    User and Role Management:
                  </h3>
                  <p>
                    User access and roles are managed at the domain level. This
                    means that users in one domain may have different roles and
                    permissions compared to users in another domain. It helps
                    organizations maintain a clear separation of duties and
                    responsibilities.
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
                    Reporting and Analytics
                  </h3>
                  <p>
                    Domain-specific reporting and analytics allow each domain to
                    generate insights and metrics relevant to their operations.
                    This supports informed decision-making and performance
                    tracking within each domain.
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
                    Upgrade and Maintenance
                  </h3>
                  <p>
                    Domain Management simplifies platform upgrades and
                    maintenance. Changes made in one domain don't impact other
                    domains, making it easier to maintain and update specific
                    parts of the platform without affecting the entire instance.
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
                    Service Level Management
                  </h3>
                  <p>
                    Each domain can define its own service level agreements
                    (SLAs) and performance metrics, ensuring that services are
                    delivered according to the unique requirements of each
                    domain.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-center w-full mx-auto md:w-[70%] mt-[8rem] mb-[rem]">
              <p className="text-[1.5rem]">
                "ServiceNow Domain Management services provide a way to manage
                multiple, distinct business areas within a single ServiceNow
                instance. It helps organizations maintain data isolation,
                security, customization, and independent processes while
                streamlining administration and maintenance tasks. This is
                particularly valuable for large enterprises or managed service
                providers that need to serve multiple clients or business units
                using a single instance. Contact us today, and let's embark on a
                partnership that equips your team for a successful future with
                ServiceNow".
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Domain;
