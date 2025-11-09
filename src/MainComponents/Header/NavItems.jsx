import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import Sidebar from "../Header/Sidebar";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";

const menuItems = [
  {
    label: "Sport Shoes",
    link: "/",
    subItems: [
      "Running Shoes",
      "Basketball Shoes",
      "Soccer Shoes",
      "Football Shoes",
      "Tennis Shoes",
      "Training Shoes",
    ],
  },
  {
    label: "Apparel",
    link: "/",
    subItems: [
      "Jerseys",
      "Shorts",
      "Tracksuits",
      "Compression Gear",
      "Base Layers",
      "Socks",
      "Hats",
      "Gloves",
    ],
  },
  {
    label: "Balls",
    link: "/",
    subItems: ["Basketballs", "Soccer Balls", "Volleyballs", "Footballs"],
  },
  {
    label: "Racket & Bats",
    link: "/",
    subItems: [
      "Tennis Rackets    ",
      "Badminton Rackets",
      "Squash Rackets",
      "Baseball Bats",
      "Softball Bats",
      "Cricket Bats",
    ],
  },
  {
    label: "Protective Gears",
    link: "/",
  },
  {
    label: "Fitness",
    link: "/",
    subItems: [
      "Running Shoes",
      "Basketball Shoes",
      "Soccer Shoes",
      "Football Shoes",
      "Tennis Shoes",
      "Training Shoes",
    ],
  },
  {
    label: "Nutrition",
    link: "/",
    subItems: [
      "Running Shoes",
      "Basketball Shoes",
      "Soccer Shoes",
      "Football Shoes",
      "Tennis Shoes",
      "Training Shoes",
    ],
  },
  {
    label: "Accessories",
    link: "/",
    subItems: [
      "Running Shoes",
      "Basketball Shoes",
      "Soccer Shoes",
      "Football Shoes",
      "Tennis Shoes",
      "Training Shoes",
    ],
  },
  {
    label: "Cycling",
    link: "/",
    subItems: [
      "Running Shoes",
      "Basketball Shoes",
      "Soccer Shoes",
      "Football Shoes",
      "Tennis Shoes",
      "Training Shoes",
    ],
  },

  {
    label: "Monitoring",
    link: "/",
    subItems: [
      "Running Shoes",
      "Basketball Shoes",
      "Soccer Shoes",
      "Football Shoes",
      "Tennis Shoes",
      "Training Shoes",
    ],
  },
];

const NavItems = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSide = () => {
    setIsSideBarOpen(true);
  };

  return (
    // Added border-t for visual separation from the section above
    <nav className="py-2 border-t border-gray-200 shadow-sm bg-white">
      {/* Container ensures proper width and padding */}
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* COL 1: SHOP BY CATEGORIES Button (Always Visible) */}
        {/* Uses a strong primary color (Indigo) for high visibility */}
        <div className="w-full lg:w-1/5">
          <Button
            className="
              !flex !items-center !w-full !max-w-xs !justify-between !gap-2 
              !bg-indigo-600 hover:!bg-indigo-700 !text-white 
              !font-bold !text-sm !py-3 !px-4 !rounded-md !transition 
            "
            onClick={openSide}
          >
            <RiMenu2Fill className="text-lg" />
            <span className="truncate">Shop By Categories</span>
            <FaAngleDown className="text-lg" />
          </Button>
        </div>

        {/* COL 2: MAIN NAVIGATION LINKS (Desktop Only) */}
        {/* Hidden on small screens (default) and shown on large screens (lg:flex) */}
        <div className="hidden lg:flex lg:w-3/5 xl:w-3/4 justify-center">
          <ul className="flex items-center justify-center space-x-6 xl:space-x-8">
            {menuItems.slice(0, 6).map(
              (
                item,
                index // Display only first 5-6 items for space
              ) => (
                <li
                  key={index}
                  className="list-none group relative transition duration-300"
                >
                  <Link to={item.link}>
                    <Button
                      className="
                      !link !transition !duration-300 
                      !text-gray-700 hover:!text-indigo-600 
                      !text-sm !font-semibold !py-2 !px-0
                    "
                    >
                      {item.label}
                    </Button>
                  </Link>

                  {/* Optional: Simple drop-down indicator (if subItems exist) */}
                  {item.subItems && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        {/* COL 3: Spacer or Additional Element (Desktop Only) */}
        <div className="hidden lg:block lg:w-1/5 xl:w-1/12">
          <p className="text-[12px] flex gap-2 mb-0 mt-0 items-center ">
            <MdOutlineRocketLaunch className="" /> Free International Delivery
          </p>
        </div>
      </div>

      {/* Sidebar Component (Mobile Menu) */}
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </nav>
  );
};

export default NavItems;
