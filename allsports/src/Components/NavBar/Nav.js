
import React from "react";

import { FaSearch, FaShippingFast } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { MdLogin } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import "./Nav.css";

const Nav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="header">
      <div className="top_header">
        <div className="icon">
          <FaShippingFast />
        </div>
        <div className="info">
          <p>Free shipping when shopping above $1000</p>
        </div>
      </div>
      <div className="mid_header logo items-center bg-primary/40">
        <div className="logo items-center">
          <img src={Logo} alt="" />
          <span className="font-bold text-2xl sm:text-3xl gap-2 items-center">
            AllSports
          </span>
        </div>
        <div className="search_box">
          <input type="text" placeholder="Search" />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="user items-center">
          <div className="icon">
            <MdLogin />
          </div>
          <div className="btn">
            <button onClick={() => loginWithRedirect()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
