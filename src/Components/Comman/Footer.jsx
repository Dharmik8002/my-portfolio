import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-purple-100 text-xs text-[#B110FF] text-center p-5">
        © {currentYear} Dharmik Modi. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
