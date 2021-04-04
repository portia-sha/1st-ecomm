// since we need to store the actual data related to our collection, class conponenet is needed

import React from 'react';

import SHOP_DATA from '../../redux/shop/shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;

    return (
      <div className='shoppage'>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
