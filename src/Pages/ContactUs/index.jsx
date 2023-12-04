import { Layout } from "../../Components";
import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import GoogleMap from "../../Components/GoogleMap";
import Call from "../../Assests/contact.jpeg";
function Contact() {
  return (
    <Layout>
      <div className="flex max-w-[90%] md:pt-[7rem] pt-[4rem] flex-wrap mb-[5rem] lg:max-w-[85%] mx-auto ">
        <div className="mt-[3rem] md:w-[50%] md:mt-[6rem] mb-[2rem]">
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Contact Us.
          </h2>
          <p className="md:w-[80%]">
            {" "}
            Contact Us. For enquiries, request for proposal, feedback and kindly
            reach out to us. Our project managers are available to analyze your
            request and come up with the best approach for your project.
          </p>
        </div>
        <div className=" md:w-[50%]">
          <img src={Call} alt="contact" className="w-full" />
        </div>
      </div>
      <div className="flex max-w-[90%] items-center pt-[rem] flex-wrap mb-[rem] lg:max-w-[85%] mx-auto ">
        <div className="w-full md:w-[48%]">
          <GoogleMap />
        </div>

        <div className="mt-[3rem] md:mt-[rem] w-full md:w-[50%] md:pl-[4rem]">
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Get in touch with us
          </h2>
          <p>Fill the form below or visit us at our contact address</p>
          <div className="flex mb-3 mt-3">
            <LocationMarkerIcon className="w-5 mr-3 " />
            <p>
              Apt 101- 4019 Bloor Street West, Etobicoke, Toronto, ON, M9B 1M4
            </p>
          </div>
          <div className="flex mb-3">
            <PhoneIcon className="w-4 mr-3" />
            <p>+1 647-568-1570</p>
          </div>
          <div className="flex mb-3">
            <MailIcon className="w-4 mr-3" />
            <a
              href="mailto:sasomsolutions@gmail.com"
              className="text-[#356ee9df]"
            >
              Send mail
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
