import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default layout;
