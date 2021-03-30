import React from "react";
import { withRouter } from "react-router-dom";

import "../menu-item/menu-item.styles.scss";

// instead of just using props and this.props to dynamic control the title name, we notice that each block has the specific image that we may can use here to set title

// Reason why we introduce match props, is that in the menu item, we dont know where the directory page will be, which means we dont know directory url, therefore we need match.url do this for us.
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  // Since React give HTML markup elements a property called style, which style takes an object's props value that equals to CSS value that you can apply
  //in JXS/CSS components, we wrap multiple class we need in {} not in (), such as size and menu-item

  //history.push here is aimed to when click each menu item, push the url attach to base / url therefore we can reach the exact hats/shoes page, therefore we first create linkurl props to directory state, where data stores for us can push, then withRouter can help menuItem to reach match.url props to know the base match url and we can push.
  // /somematchedURL/LinkURL
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      // since we only want pic zoom when 鼠标在图片上。 not along every pic
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title"> {title.toUpperCase()} </h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// By using higher order component, powering up menu-item and help it to have the access the props that related to router. withRouter() will return same name MenuItem with the access to match. location and history.
export default withRouter(MenuItem);
