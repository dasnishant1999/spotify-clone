import React from "react";

import "./SiderbarOption.css";

function SiderbarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h4>{text}</h4> : <p>{text}</p>}
    </div>
  );
}

export default SiderbarOption;
