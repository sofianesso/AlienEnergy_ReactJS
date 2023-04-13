import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { RiAliensFill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Navbar.css';
import { Button } from '../Button/Button';
import { auth } from '../../firebase-config';

function Navbar({ history }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user, setUser] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleRouteChange = () => {
    window.scrollTo(0, 0);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
    handleRouteChange();
  };

  const logout = async () => {
    await auth.signOut();
  };

  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unlisten = history.listen(handleRouteChange);
    return () => unlisten();
  }, [history]);

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={handleLinkClick}>
              <div className='navbar-icon-container'>
                <RiAliensFill className='navbar-icon' />
              </div>
              <div className='navbar-text'>
                ALIEN
              </div>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={handleLinkClick}
                >
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={handleLinkClick}
                >
                  About ALIEN
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
              {user ? (
                <li className='nav-btn'>
                  <div className='nav-user'>User: {user.email}</div>
                  <Button
                    buttonStyle='btn--outline'
                    onClick={() => {
                      logout();
                      handleRouteChange();
                    }}
                  >
                    SIGN OUT
                  </Button>
                </li>
              ) : (
                <li className='nav-btn'>
                  {button && (
                    <Link to='/signup' className='btn-link'>
                      <Button buttonStyle='btn--outline'>SIGN UP</Button>
                    </Link>
                  )}
                </li>
              )}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
                  };

  export default withRouter(Navbar);