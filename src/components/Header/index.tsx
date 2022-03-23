import React from "react";
import { UserOutlined } from "@ant-design/icons";
import "./style.scss";

import { MENU_INDEX_CONFIG } from "../../common/constant/menu";

import MenuItem from "./MenuItem";
export default function Header() {
  const userName = "zzw";
  return (
    <div className="header-component-box">
      <div className="left">
        <div className="logo"></div>
        <div className="menu">
          {MENU_INDEX_CONFIG.map((menuItem, index) => (
            <MenuItem menuItemInfo={menuItem} isActive={menuItem.isActive} />
          ))}
        </div>
      </div>
      <div className="user-info">
        <UserOutlined />
        <span className="user-name">{userName}</span>
      </div>
    </div>
  );
}
