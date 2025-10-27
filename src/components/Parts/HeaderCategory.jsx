import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const HeaderCategory = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <div className="flex justify-around py-3 px-2">
      {Menu.map((data) => (
        <LowerNavBar key={data.id}  href={data.link} FlyoutContent={Dropdowns}>
          {data.name}
        </LowerNavBar>
      ))}
    </div>
  );
};

const LowerNavBar = ({ children, href, FlyoutContent }) => {
  // You want the dropdown to be initially closed, so set it to false.
  // Setting it to 'true' will keep it open by default, which is unusual for a dropdown.
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  return (
    // Wrap BOTH the navigation link and the dropdown content in a single parent
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit" // This container now handles the mouse events
    >
      {/* 1. The navigation link */}
      <a href={href} className="relative text-primary">
        {children}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-primary transition-transform duration-500 ease-out"
        />
      </a>

      {/* 2. The dropdown content */}
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            key="flyout-dropdown" // Add a key to help AnimatePresence track it
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ TranslateX: "-50%" }} // Add a transition duration
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white text-black z-10"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Dropdowns = () => {
  return <div className=" h-24 w-64 bg-primary/40"></div>;
};

export default HeaderCategory;
