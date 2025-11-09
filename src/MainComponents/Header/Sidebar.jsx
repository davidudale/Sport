import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";
import List from "@mui/material/List"; // Used for main list
import ListItem from "@mui/material/ListItem"; // Used for list items
import { Link } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import Divider from "@mui/material/Divider"; // Added to separate header

export default function Sidebar(props) {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(null);

  const openSubmenu = (index) => {
    setIsOpenSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleDrawer = (newOpen) => () => {
    props.setIsSideBarOpen(newOpen);
  };

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

  const DrawerList = (
    // Set a wider width (300px) for a more substantial look
    <Box
      sx={{ width: 300 }}
      role="presentation"
      className="h-full bg-white flex flex-col"
    >
      {/* HEADER SECTION: Attractive Title and Close Button */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <h3 className="text-xl font-extrabold text-indigo-800">
          Shop By Categories
        </h3>
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-2xl text-gray-600 hover:text-indigo-700 transition duration-200"
        />
      </div>

      {/* SCROLLABLE MENU CONTENT */}
      <div className="flex-grow overflow-y-auto">
        <List component="nav" aria-label="sidebar navigation categories">
          {menuItems.map((item, index) => (
            <div key={index}>
              <ListItem disablePadding className="relative group">
                {/* Main Link Button */}
                <Link to={item.link} className="w-full">
                  <Button
                    className={`
                      !w-full !justify-start !capitalize 
                      !text-base !py-3 !px-4 !font-semibold
                      !text-gray-700 hover:!#ff5252 hover:!text-red-600
                      ${isOpenSubMenu === index ? "!#ff5252 !text-red-600" : ""}
                    `}
                  >
                    {item.label}
                  </Button>
                </Link>

                {/* Submenu Toggle Icon */}
                {item.subItems && (
                  <div
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-indigo-600 transition"
                    onClick={() => openSubmenu(index)}
                  >
                    {isOpenSubMenu === index ? (
                      <FiMinusSquare className="text-xl" />
                    ) : (
                      <FaRegSquarePlus className="text-xl" />
                    )}
                  </div>
                )}
              </ListItem>

              {/* Submenu List */}
              {item.subItems && isOpenSubMenu === index && (
                <List
                  component="div"
                  disablePadding
                  className="pl-4 border-l-2 border-indigo-200 ml-4 my-1"
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem key={subIndex} disablePadding>
                      <Link to={item.link} className="w-full">
                        <Button className="!w-full !justify-start !capitalize !text-sm !py-2 !px-4 !font-medium !text-gray-600 hover:!text-indigo-600">
                          {subItem}
                        </Button>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              )}
              <Divider className="!my-0" />
            </div>
          ))}
        </List>
      </div>

      {/* Optional: Add a call-to-action or footer links at the bottom */}
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/contact"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
        >
          Contact Support
        </Link>
      </div>
    </Box>
  );

  return (
    <Drawer open={props.isSideBarOpen} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
