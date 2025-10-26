import React from "react";
import Logo from "../../src/assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Short Shoes",
    link: "/#Shoes",
  },
  {
    id: 3,
    name: "Apparel",
    link: "/#apparel",
  },
  {
    id: 4,
    name: "Balls",
    link: "/#Shoes",
  },
  {
    id: 5,
    name: "Racket & Bats",
    link: "/#Shoes",
  },
  {
    id: 6,
    name: "Protective Gears",
    link: "/#Shoes",
  },
  {
    id: 7,
    name: "Fitness",
    link: "/#Shoes",
  },
  {
    id: 8,
    name: "Nutrition",
    link: "/#Shoes",
  },
  {
    id: 9,
    name: "Accessories",
    link: "/#Shoes",
  },
  {
    id: 10,
    name: "Cycling",
    link: "/#Shoes",
  },
  {
    id: 11,
    name: "Monitoring",
    link: "/#Shoes",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white  duration-200 transition-all z-40">
      {/*Upper NavBar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              AllSports
            </a>
          </div>
          {/*Search Bar */}
          <div>
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] group-hover:border-primary transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary "
              />
              <IoMdSearch className="absolute text-gray-500 group-hover:text-primary top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/*Order Button */}
          <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center cursor-pointer gap-3 group ">
            <span className="hidden group-hover:block transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm " />
          </button>
        </div>
      </div>
      {/*Lower NavBar */}
      <div data-aos="zoom-in" className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 py-1 hover:text-primary duration-200"> {data.name} </a>
            </li>
          ))}
          <div className="absolute top-full">
            <a>Home</a>
            <a>Home</a>
            <a>Home</a>
            <a>Home</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
