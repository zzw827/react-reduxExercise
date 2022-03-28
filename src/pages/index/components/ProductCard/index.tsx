import React, { Component, Fragment } from 'react'

import productMockData from '../../../../common/constant/productService'

import './style.scss'



interface IProps { }

interface IStates { }

class ProductCard extends React.Component<IProps, IStates> {
    state = {}
// window.href.location 跳转页面 当你写 div普通元素的时候 绑定跳转
    handleServiceItemClick = (url: string) => {
        window.location.href = url;
    }

    render() {
        return (
            <div className="product-service-component-box">
                <div className="title">营销服务</div>
                {
                    productMockData.map((productItem, index) => (
                        <div
                            className="product-service-item"
                            key={`index-menuItem${index.toString()}`}
                            onClick={() => { this.handleServiceItemClick(productItem.link); }}
                        >
                            <img src={productItem.marketToolImgUrl} alt="" />
                            <div className="name">{productItem.marketToolTitle}</div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ProductCard;

