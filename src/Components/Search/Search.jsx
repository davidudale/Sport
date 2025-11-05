import React from "react";
import {Button } from "@mui/material"
import {IoSearch} from "react-icons/io5"
import '../../Components/Search/Search.css'

const Search = () => {
  return (
    <div className="searchBox w-[100%] bg-[#e5e5e5] h-[40px] rounded-[10px] relative">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for Products..."
        className="p-2 h-[40px] rounded-[10px] w-[100%] focus:outline-none text-[14px] h-[40px] bg-inherit"
      />
      <Button className="!absolute top-[5px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[30px] !rounded-full"><IoSearch /> </Button>
    </div>
  );
};

export default Search;
