import React from "react";

import { Button } from "antd";
import  Header from'@components/Header'
import './style.css'

export default function Index() {
  return (
    <div className="index-page">
      <div className="headbox">
        < Header></Header>
      </div>
      <div className="content-box">
        <div className="left-content">
          <div className="chart-area">chart</div>
          <div className="promotion-area">promotion</div>
          <div className="product-area">product</div>
        </div>
        <div className="right-content">
          <div className="account-area">account-area</div>
          <div className="index-banner-area">index-banner</div>
          <div className="product-news-area">product news</div>
        </div>
      </div>
      <div className="foot-box">3</div>
    </div>
  );
}
