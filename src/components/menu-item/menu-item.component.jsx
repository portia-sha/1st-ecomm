import React from "react";
import "../menu-item/menu-item.styles.scss";

// instead of just using props and this.props to dynamic control the title name, we notice that each block has the specific image that we may can use here to set title
const MenuItem = ({ title, imageUrl, size }) => (
  // Since React give HTML markup elements a property called style, which style takes an object's props value that equals to CSS value that you can apply
  //in JXS/CSS components, we wrap multiple class we need in {} not in (), such as size and menu-item
  <div className={`${size} menu-item`}>
    <div
      // since we only want pic zoom when 鼠标在图片上。 not along every pic
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
