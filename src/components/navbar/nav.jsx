import React from "react";
import { FaSearch, FaShippingFast } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { MdLogin, MdLogout } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import "../navbar/nav.css";
import { CiUser } from "react-icons/ci";

const nav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    //{/*NavBar containing three headers 1. Top, Mid and Last header */}
    <div className="header">
      {/*Top header */}
      <div className="top_header">
        <div className="icon">
          <FaShippingFast />
        </div>
        <div className="info">
          <p>Free shipping when shopping above $1000</p>
        </div>
      </div>
      {/*Mid header */}
      <div className="mid_header items-center bg-primary/40">
        <div className="logo items-center">
          <img src={Logo} alt="" />
          <span className="font-bold text-2xl sm:text-3xl gap-2 items-center">
            AllSports
          </span>
        </div>
        <div className="search_box flex">
          <input type="text" placeholder="Search" />
          <button>
            <FaSearch />
          </button>
        </div>
        {isAuthenticated ? (
          <div className="user items-center">
            <div className="icon">
              <MdLogout />
            </div>
            <div className="btn">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="user items-center">
            <div className="icon">
              <MdLogin />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
        )}
      </div>
      {/*Last header */}
      <div className="Last_header">
        <div className="user_profile">
          {isAuthenticated ? (
            <>
              <div className="icon">
                <CiUser />
              </div>
              <div className="info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </>
          ) : (
            <>
              <div className="icon">
                <CiUser />
              </div>
              <div>
                <p>Please Sign in</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default nav;
