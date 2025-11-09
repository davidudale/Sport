import React from "react";
import TopHeader from "../Header/TopHeader";
import SwiperSlider from "../Homepage/SwiperSlider"
import SubSlider from "./SubSlider";

const Homepage = () => {
  return (
    <>
      <div>
        <TopHeader />
      </div>
      <div>
        <SwiperSlider />
      </div>
      <div>
        <SubSlider />
      </div>
    </>
  );
};

export default Homepage;
