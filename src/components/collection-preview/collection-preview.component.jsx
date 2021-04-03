import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import '../collection-preview/collection-preview.styles.scss';

// as long as component get rendered or rerendered, the below function get called every time
// Note here, title and items 同是 state第一级props, 就是 hats shoes 那五大类东西和这五类东西包含的item array
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        // 这里的item同上，但是idx和id就是这个array里的元素了
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
