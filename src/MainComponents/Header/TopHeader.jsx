import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Search from "../../components/Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import NavItems from "./NavItems";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const TopHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 shadow-xl bg-white">
      {/* 1. ANNOUNCEMENT BAR (Already responsive, slightly simplified comments) */}
      <div className="Container shadow-md px-4 bg-gray-100">
        <div className="top flex flex-col sm:flex-row items-center justify-between py-2">
          <div className="col1 w-full text-center sm:w-auto sm:text-left mb-2 sm:mb-0">
            <p className="text-[14px] font-[600]">
              Get up to 50% off new season styles, limited time only
            </p>
          </div>

          <div className="col2 w-full sm:w-auto">
            <ul className="flex items-center justify-center sm:justify-end gap-3">
              <li className="list-none">
                <Link
                  to="/helpcenter"
                  className="link transition text-[14px] font-[600]"
                >
                  Help Center
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="ordertracking"
                  className="link transition text-[14px] font-[600]"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mid bg-white  flex flex-col lg:flex-row  items-center justify-between py-3 lg:py-5 border-b border-b-gray-200 px-4">
        <div className="col1 w-full lg:w-[25%] flex justify-center lg:justify-start mb-4 lg:mb-0">
          <div className="logo">
            {/* Adjusted class for image to be responsive but maintain max size */}
            <img
              src={Logo}
              alt="Company Logo"
              className="h-[40px] md:h-[45px] max-w-full"
            />
          </div>
        </div>

        {/* Col2: Search Bar (Mobile: middle, takes up most of the width / Large: 45% width) */}
        <div className="col2 w-full lg:w-[45%] px-0 md:px-4 mb-4 lg:mb-0">
          {/* Assuming Search component is already responsive */}
          <Search />
        </div>

        {/* Col3: Tools/Icons (Mobile: bottom, full width / Large: 30% width) */}
        <div className="col3 w-full lg:w-[30%]">
          {/* Items are centered on mobile, pushed to end on large screens */}
          <div className="tools flex justify-center lg:justify-end">
            <ul className="flex gap-3 items-center">
              {/* Login/Register Links (hidden on smaller mobile screens for space) */}
              <li className="list-none  sm:block">
                <Link className="link transition text-[14px] font-[600]">
                  Login
                </Link>{" "}
                |&nbsp;
                <Link className="link transition text-[14px] font-[600]">
                  Register
                </Link>
              </li>

              {/* Icons remain visible on all screens */}
              <li>
                <Tooltip title="Compare" placement="bottom">
                  <IconButton aria-label="compare">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="WishList" placement="bottom">
                  <IconButton aria-label="wishlist">
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
      <div className="lastHeader border-b-[1px] border-gray-300">
        <NavItems />
      </div>
    </header>
  );
};

export default TopHeader;
