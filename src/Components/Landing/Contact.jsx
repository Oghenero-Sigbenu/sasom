function ContactForm() {
  return (
    <div className="w-full  ">
      <div className="mx-auto  pt-[4rem]  shadow-sm w-full md:w-[600px]">
        <h2 className="text-center   text-primary font-extrabold text-[1.7rem]">
          CONTACT US
        </h2>
        <hr className="w-[90px] mx-auto border-b mt-3 border-blue border-4 bg-blue"></hr>
        <form
          method="POST"
          action="https://getform.io/f/0a3ee0ee-c3ea-4227-883f-4fe0f47f621b"
          className="w-[80%] md:w-[500px] mt-8 mx-auto text-center flex-col flex "
        >
          <div className="flex justify-between">
            <input
              name="email"
              type="text"
              className=" mb-6 w-[48%] border-[.1px] border-[#e0dada] rounded-t-lg py-[1rem] px-4 outline-0"
              placeholder="Enter first name"
            />
            <input
              name="email"
              type="text"
              className="border-[.1px] border-[#e0dada] mb-6 w-[48%] rounded-t-lg py-[1rem] px-4 outline-0"
              placeholder="Enter last name"
            />
          </div>
          <input
            name="phone"
            type="number"
            className="border-[.1px] border-[#e0dada] mb-6 rounded-t-lg py-[1rem] px-4 outline-0"
            placeholder="Enter phone number"
          />
          <input
            name="email"
            type="email"
            className="border-[.1px] border-[#e0dada] mb-6 rounded-t-lg py-[1rem] px-4 outline-0"
            placeholder="Enter email address"
          />
          <input
            name="subject"
            type="text"
            className="border-[.1px] border-[#e0dada] mb-6 rounded-t-lg py-[1rem] px-4 outline-0"
            placeholder="Enter Subject"
          />
          <textarea
            className="border-[.1px] border-[#e0dada] rounded-b-lg h-[120px] px-4 py-3 outline-0"
            placeholder="Type a message"
          />
          <button className="bg-primary w-[50%] mx-auto my-[3rem] text-white font-bold  rounded-[25px] py-[.7rem] p">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
