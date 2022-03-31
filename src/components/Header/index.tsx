import React from "react";
import { UserOutlined } from "@ant-design/icons";
import "./style.scss";

import { MENU_INDEX_CONFIG } from "../../common/constant/menu";

import MenuItem from "./MenuItem";
import { render } from "@testing-library/react";
const userName = "zzw";

interface IProps {
  history?: any;
}
export default class Header extends React.Component<IProps> {
  handleClick = (url: string) => {
    const { history } = this.props;
    history.push(url);
  };


  handleIsActive =( name:string) =>{
    MENU_INDEX_CONFIG.map(menuItem=>{
      if(menuItem.name === name){
        menuItem.isActive=true
      }else{
        menuItem.isActive=false;
      }
      return menuItem;
    })
  } 
  render() {
    return (
      <div className="header-component-box">
        <div className="left">
          <div className="logo"></div>
          <div className="menu">
            {MENU_INDEX_CONFIG.map((menuItem, index) => (
              <MenuItem
                onClick={() => {
                  this.handleClick(menuItem.url);
                }}

                handleIsActive={()=>{this.handleIsActive(menuItem.name)}}
                key={`menuItem${index.toString()}`}
                menuItemInfo={menuItem}
                isActive={menuItem.isActive}
              />
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
}
