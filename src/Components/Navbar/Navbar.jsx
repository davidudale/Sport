import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Navlist from "./Navlist";
import "../../Components/Navbar/Navbar.css"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  return (
    <header>
      <div className="top_strip py-2 border-t-[1px] border-b-[1px] border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[50%]">
            <p className="text-[14px] font-[600]">
              Get up to 50% off new season styles, limited time only
            </p>
          </div>
          <div className="col2 justify-end">
            <ul className="flex gap-3 items-center">
              <li className="list-none">
                <Link
                  to="/helpcenter"
                  className="transition text-[14px] font-[600] link"
                >
                  Help Center
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/ordertracking"
                  className="transition text-[14px] font-[600] link"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header border-b-[1px] border-gray-300">
        <div className="container flex items-center py-2">
          <div className="col_1 w-[25%]">
            <Link to={"/"}>
              <img src={Logo} alt="" className="h-[50px]" />
            </Link>
          </div>
          <div className="col_2 w-[45%]">
            <Search />
          </div>
          <div className="col_3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li>
                <Link
                  to={"/login"}
                  className="link transition font-[600] text-[15px]"
                >
                  Login
                </Link>{" "}
                |&nbsp;
                <Link
                  to={"/login"}
                  className="link transition font-[600] text-[15px]"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare" placement="bottom">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="WishList" placement="bottom">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart" placement="bottom">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navlist />
    </header>
  );
};

export default Navbar;
