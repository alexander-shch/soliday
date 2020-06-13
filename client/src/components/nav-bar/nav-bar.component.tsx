import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import solidayLogo from '../../assets/media/soliday.jpg';
import './nav-bar.component.scss';
import authState from '../../services/auth';

const NavBar: React.FC<any> = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    authState.subscribe((token) => {
      console.log(token);
      setUser(token || '');
    });
  }, [user]);

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <Link to='/'>
        <img src={solidayLogo} alt='soliday' />
      </Link>
      <div>
        <Button variant='contained'>
          <Link to='/profile'>{user ? 'profile' : 'login'}</Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
