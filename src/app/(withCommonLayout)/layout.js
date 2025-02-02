import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;
