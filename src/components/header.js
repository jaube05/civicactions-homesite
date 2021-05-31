import '../sass/styles.scss';
import React, {useEffect, useState} from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/ca-extended-logo.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import PropTypes from 'prop-types';

const Header = ({ onMenuClick, mobileMenuHiddenBool }) => {

  const menuVisibility = mobileMenuHiddenBool ? 'mobile-menu-closed' : 'mobile-menu-open';
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100)
    })
  }, []);
  return (
    <header className={scroll ? "main-header scrolled" : "main-header"}>
      <div className='inner'>
        <Link to='/' className='logo'>
          <img src={extendedLogo} alt='Civic Actions Logo'></img>
        </Link>
        <div className='header-nav'>
          <Link to=''>company</Link>
          <Link to='/services'>services</Link>
          <Link to=''>our work</Link>
          <Link to=''>insights</Link>
          <Link to='/careers'>careers</Link>
          <div className='primary-button'>contact us</div>
        </div>
        <div
          className='header-nav-mobile'
          onClick={onMenuClick}
          role='button'
          tabIndex={0}
          onKeyDown={() => {}}>
          <img src={menuIcon} alt=''></img>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onMenuClick: PropTypes.func,
  visibility: PropTypes.bool
};
