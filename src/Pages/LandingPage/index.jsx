import { Layout, Hero, AboutHero } from "../../Components";
import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import Title from "../../Components/Common/Title";
import Products from "../../Components/Landing/Products";

function LandingPage({ baseVelocity = 10 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 500,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  // const x = useTransform(baseX, (v) => `${wrap(-40, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <Layout color={true} className="">
      <Hero />
      <div className="">
        <AboutHero
          text="SASOM is a leading boutique ServiceNow consulting and training company based in Ajax, ON. Our team of experts is dedicated to providing exceptional services to our clients, helping them to optimize their ServiceNow platform and achieve their business goals."
          text2="With years of experience in the industry, we have developed a deep understanding of the ServiceNow platform and its capabilities. We work closely with our clients to understand their unique needs and provide tailored solutions that meet their specific requirements. Our commitment to excellence and customer satisfaction has earned us a reputation as a trusted partner in the ServiceNow community."
          more={true}
        />
        <div className=" mt-[8rem] mb-[5rem] md:mt-[8rem] md:mb-[7rem]">
          <Title
            text="text-primary"
            title="WHAT WE DO"
            bg="bg"
            border="border-primary-shade"
          />
          <p className="text-center mt-[1rem] mx-auto w-[90%] md:w-[50%]">
            SASOM Solution Incoporate Inc. provides ServiceNow consulting and
            training services to help empower organizations to unlock innovative
            ServiceNow solutions. Our consultancy services and training courses
            draw on decades of experience to help you get the most out of your
            ServiceNow investment.
          </p>
        </div>
      </div>

      <Products />
    </Layout>
  );
}

export default LandingPage;
