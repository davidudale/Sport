import { Button } from "@mui/material";
import React, {useState} from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Categories from "../../Components/Navbar/Categories";

const Navlist = () => {

    const [isOpenCategories, setIsOpenCategories] = useState(false)

    const openCategories = () =>{
        setIsOpenCategories(true)
    }
  return (
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-4">
        <div className="col1 w-[20%]">
          <Button className="!text-black !font-[600] gap-2 w-full" onClick={openCategories}>
            <RiMenu2Fill className="text-[18px]" />
            Shop By Categories <FaAngleDown className="text-[18px] ml-auto" />
          </Button>
        </div>
        <div className="col2 w-[65%]">
          <ul className="flex items-center gap-1">
            <li>
              <Link to={"/"} className="link transition  font-[500]">
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/fashion"}
                className="link transition text-[15px] font-[500]"
              >
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">
                  Fashion
                </Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/electronics"}
                className="link transition text-[15px] font-[500]"
              >
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">
                  Electronics
                </Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/bags"}
                className="link transition text-[15px] font-[500]"
              >
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">
                  Bags
                </Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/footwears"}
                className="link transition text-[15px] font-[500]"
              >
                
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">Footwears</Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/groceries"}
                className="link transition text-[15px] font-[500]"
              >
              
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">Groceries</Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/beauty"}
                className="link transition text-[15px] font-[500]"
              >
                
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">Beauty</Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/wellbeing"}
                className="link transition text-[15px] font-[500]"
              >
                
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">Wellbeing</Button>
              </Link>
            </li>
            <li>
              <Link
                to={"/jewellery"}
                className="link transition text-[15px] font-[500]"
              >
                
                <Button className="link transition !text-[rgba(0,0,0,0.8)] !text-[12px] !font-[550] hover:!text-[#ff5252]">Jewellery</Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col3 w-[15%]">
          <p className="text-[12px] flex gap-2 mb-0 mt-0 items-center">
            <MdOutlineRocketLaunch className="" /> Free International Delivery
          </p>
        </div>
      </div>
      <Categories  isOpenCategories={isOpenCategories} setIsOpenCategories={setIsOpenCategories}/>
    </nav>

    
  );
};

export default Navlist;
