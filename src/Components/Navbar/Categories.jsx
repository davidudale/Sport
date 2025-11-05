import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Categories = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategories(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[15px] flex justify-between items-center font-[600]">
        Shop by Categories{" "}
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none items-center relative">
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !font-[600]">
              Fashion
            </Button>
            <FaRegSquarePlus className="absolute top-[10px] right-[5px] cursor-pointer" />
            <ul className="w-full submenu top-[100%] left-[0%] pl-3 ">
              <li className="list-none relative">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !font-[600]">
                  Aparrel
                </Button>
                <FaRegSquarePlus className="absolute top-[10px] right-[5px] cursor-pointer" />
              </li>
              <ul className="w-full submenu top-[100%] left-[0%] pl-3 ">
                <li className="list-none relative">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !font-[600]">
                    Aparrel
                  </Button>
                  <FaRegSquarePlus className="absolute top-[10px] right-[5px] cursor-pointer" />
                </li>
              </ul>
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCategories} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Categories;
