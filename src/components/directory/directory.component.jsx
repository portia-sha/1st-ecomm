// this one we do need class component since we need some state to store our menu item that we wanna pass and create menu-item

import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "../directory/directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      // since each menu item just a section, therefore we create an array names section to store menuitem
      section: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    // we wanna import section data into menu items therefore we can create menu item on page
    return (
      <div className="directory-menu">
        {/* destructor here for us to use instead of doing section.title.
        To change the size of pics, we can add a value size to state, then pass size value into component then pass it to menu-item component
        */}

        {this.state.section.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
