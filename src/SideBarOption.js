import React from "react";
import "./SideBarOption.css";

const SideBarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__Icon" />}
      {Icon ? <h5>{title}</h5> : <p>{title}</p>}
    </div>
  );
};

export default SideBarOption;
