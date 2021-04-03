import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../collections-overview/collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collection }) => (
  <div className='collection-overview'>
    {collection.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
