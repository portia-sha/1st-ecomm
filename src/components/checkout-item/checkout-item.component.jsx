import React from 'react';

import '../checkout-item/checkout-item.styles.scss';

import { connect } from 'react-redux';
import { clearItem, addItem, deleteItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, clearItem, addItem, deleteItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={() => deleteItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (disptach) => ({
  clearItem: (item) => disptach(clearItem(item)),
  addItem: (item) => disptach(addItem(item)),
  deleteItem: (item) => disptach(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
