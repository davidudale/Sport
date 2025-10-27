

import UpperNavBar from "./Parts/UpperNavBar";
//import LowerNavBar from "./Parts/LowerNavBar";
import HeaderCategory from "./Parts/HeaderCategory";



const Navbar = () => {
  

  return (
    <div className="shadow-md bg-white  duration-200 transition-all z-40">
      <UpperNavBar />
      <HeaderCategory />
      
    </div>
  );
};

export default Navbar;
