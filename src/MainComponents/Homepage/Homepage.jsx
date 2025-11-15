import React from "react";
import TopHeader from "../Header/TopHeader";
import SwiperSlider from "../Homepage/SwiperSlider";
import SubSlider from "./SubSlider";
import { FaShippingFast } from "react-icons/fa";
import FeatureBar from "../Homepage/FeatureBar";

const Homepage = () => {
  return (
    <>
      <div>
        <TopHeader />
      </div>
      <div className="mt-[200px]">
        <SwiperSlider />
      </div>
      <div>
        <SubSlider />
      </div>
      <div>
        <FeatureBar />
      </div>
    </>
  );
};

export default Homepage;
