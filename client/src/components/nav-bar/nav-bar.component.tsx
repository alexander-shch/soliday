import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import solidayLogo from '../../assets/media/soliday.jpg';
import './nav-bar.component.scss';
import authState from '../../services/auth';
import { User } from '../../../../server/src/models/user';

const NavBar: React.FC<any> = () => {
  const [userState, setUser] = useState<User | undefined>();
  const history = useHistory();

  useEffect(() => {
    authState.subscribe(({ user }) => {
      setUser(user);
    });
  });

  const goTo = () => {
    history.push('/profile');
  };

  const getButtonText = () => {
    return userState ? 'profile' : 'login';
  };

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <Link to='/'>
        <img src={solidayLogo} alt='soliday' />
      </Link>
      <div>
        <Button variant='contained' onClick={() => goTo()}>
          {getButtonText()}
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
