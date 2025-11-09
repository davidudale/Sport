import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";

const Categories = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategories(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
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
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !font-[600]">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare 
                className="absolute top-[10px] right-[5px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
              
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[5px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="w-full submenu top-[100%] left-[0%] pl-3 ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full text-[14px] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !font-[600]">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
              <FiMinusSquare 
                className="absolute top-[10px] right-[5px] cursor-pointer"
                onClick={() => openInnerSubmenu(0)}
              />
              
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[5px] cursor-pointer"
                onClick={() => openInnerSubmenu(0)}
              /> 
            )}

                  {innerSubmenuIndex === 0 && (
                    <ul className=" inner_submenu top-[100%] left-[0%] pl-3 ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link text-[14px] justify-start  px-3"
                        >
                          Smart Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link text-[14px] justify-start  px-3"
                        >
                          Crete T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link text-[14px] justify-start  px-3"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link text-[14px] justify-start  px-3"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ul className="w-full">
          <li className="list-none items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !font-[600]">
                Ou
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare 
                className="absolute top-[10px] right-[5px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
              
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[5px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="w-full submenu top-[100%] left-[0%] pl-3 ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full text-[14px] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !font-[600]">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
              <FiMinusSquare 
                className="absolute top-[10px] right-[5px] cursor-pointer"
                onClick={() => openInnerSubmenu(1)}
              />
              
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[5px] cursor-pointer"
                onClick={() => openInnerSubmenu(1)}
              /> 
            )}

                  {innerSubmenuIndex === 1 && (
                    <ul className=" inner_submenu top-[100%] left-[0%] pl-3 ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link text-[14px] justify-start  px-3"
                        >
                          Smart Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link text-[14px] justify-start  px-3"
                        >
                          Crete T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link text-[14px] justify-start  px-3"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link text-[14px] justify-start  px-3"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
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
