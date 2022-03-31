import React from "react";
import { MenuItemInfoType, MenuItemChild } from "./types";
interface IProps {
  //   是否选中属性
  isActive?: boolean;
  onClick?: (url: string) => void;
  menuItemInfo: MenuItemInfoType;
  handleIsActive?:any
}
export default class MenuItem extends React.Component<IProps> {
  // 点击子菜单的click
  handleMenuClick = (url: string) => {
    const { onClick, handleIsActive } = this.props;

    //   如果你配置了onClick属性则调用这个url
    if (onClick) {
      onClick(url);
      handleIsActive();
    }
  };

  render() {
    const { menuItemInfo, isActive } = this.props;

    return (
      <div className="index-menuItem-component-box">
        <div
          className="menu-item-title"
          onClick={() => {
            this.handleMenuClick(menuItemInfo.url);
          }}
        >
          {menuItemInfo.name}
          {/* 有下拉框的话就 渲染一个 下拉箭头 */}
          {menuItemInfo.menuChildren.length > 0 && (
            <span className="arrow-icon"> </span>
          )}
        </div>
        <div className="bottom-line"> </div>
        {isActive && <div className="bottom-line-active"> </div>}

        {/* 有子数组 下拉菜单吗 有就渲染 */}
        {menuItemInfo.menuChildren.length > 0 && (
          <div className="menu-children-box">
            {menuItemInfo.menuChildren.map((menuChild, index) => (
              <div className="menu-child" key={`menu-child${index.toString()}`}>
                <span
                  onClick={() => {
                    this.handleMenuClick(menuChild.url);
                  }}
                >
                  {menuChild.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
