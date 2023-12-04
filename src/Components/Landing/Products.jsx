import { NavLink } from "react-router-dom";
import { products } from "../../helpers/data";
import Title from "../Common/Title";

function Products() {
  return (
    <div className="bg-[#cfb47147] py-[3rem] mb-10 md:mb-20">
      <div className="max-w-[90%]  lg:max-w-[85%] mx-auto ">
        <Title
          text="text-primary"
          title="OUR SERVICES"
          bg="bg"
          border="border-primary-shade"
        />
        <div className="flex justify-between flex-wrap w-[100%] mt-[2rem]">
          {products.map((item) => (
            <div className="w-[100%] mb-[2rem] hover:bg-primary hover:text-white rounded-[5px] p-[3rem] md:w-[31%]">
              <h3 className="font-bold  text-[1.3rem] mb-[1rem]">
                {item?.title}
              </h3>
              <p className="mb-[2rem]">{item?.detail}</p>
              <NavLink
                to={item?.path}
                className="border-2  border-white  hover:bg-white hover:text-primary px-[1rem] py-[.5rem] "
              >
                View more
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
