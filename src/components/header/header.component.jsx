import React from 'react';
import { Link } from 'react-router-dom';
// connect also a higher order function
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import '../header/header.styles.scss';

const Header = ({ currentUser }) => (
  //  first is to store logo
  <div className='header'>
    <Link className='logo-contianer' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

// state here is the root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// Now we can access the currentUser by Header itself thanks to reducer, mapStateToProps and connect, and use it in the beginning
export default connect(mapStateToProps)(Header);
