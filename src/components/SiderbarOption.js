import React from "react";

import "./SiderbarOption.css";

function SiderbarOption({ text, Icon }) {
  return (
    <div className='sidebarOption'>
      <h3>{text}</h3>
    </div>
  );
}

export default SiderbarOption;
