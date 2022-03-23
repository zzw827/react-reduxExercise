import React from "react";
import "./style.css";

import {MENU_CONFIG} from '../../common/constant/menu'
export default function Header() {
  return (
    <div className="header-component-box">
      <div className="left"> 
        <div className="logo"></div>
        <div className="menu">

            {  MENU_CONFIG.map((menuItem,index)=>(
            <div>caidan</div>
        ))}
      
      
        </div>
      </div>

      <div className="user-info">userinfo</div>
    </div>
  );
}
