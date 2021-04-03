import React from 'react';
import { connect } from 'react-redux';

import '../collection-item/collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';

// 这里的四个props都是item array的props了 注意！
// tthe reason why switch 4 props to whole item is because we need item to trigger the addItem action
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
