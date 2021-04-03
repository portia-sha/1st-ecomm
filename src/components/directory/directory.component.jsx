// this one we do need class component since we need some state to store our menu item that we wanna pass and create menu-item

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../../redux/directory/directory..selector';

import MenuItem from '../menu-item/menu-item.component';

import '../directory/directory.styles.scss';

const Directory = ({ section }) => (
  <div className='directory-menu'>
    {section.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
