import React, { Component } from "react";
import { Button } from "antd";
import Header from "@components/Header";

import DataTrend from "@components/DataTrend";
import PromotionCard from "./components/PromotionCard";
import ProductCard from "./components/ProductCard";
import Account from "./components/Account";
import Carousel from "./components/IndexBanner";
import ProductNews from "./components/ProductNews";
import "./style.css";


interface IProps {
  history?:any
}
export default class Index extends Component<IProps> {


  render() {
    const  {history} = this.props;
    return (
      <div className="index-page">
        <div className="headbox">
          <Header history={history}></Header>
        </div>
        <div className="content-box">
          <div className="left-content">
            <div className="chart-area">
              <DataTrend />
            </div>
            <div className="promotion-area">
              <PromotionCard  history={history}/>
            </div>
            <div className="product-area">
              <ProductCard />
            </div>
          </div>
          <div className="right-content">
            <div className="account-area">
              <Account />
            </div>
            <div className="index-banner-area">
              <Carousel />
            </div>
            <div className="product-news-area">
              <ProductNews />
            </div>
          </div>
        </div>
        <div className="foot-box">3</div>
      </div>
    );
  }
}
