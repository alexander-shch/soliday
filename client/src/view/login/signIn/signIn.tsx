import React, { useState } from 'react';
import '../login.scss';

import { Avatar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { logIn, getUserData } from '../../../services/auth';

const SignIn = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('o87y3hu4g');

  const login = () => {
    logIn(email, password).then(() => getUserData());
  };

  return (
    <div className='fade-in'>
      <div className='login-label-box'>
        <Avatar className='avatar'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' align='center'>
          Login
        </Typography>
      </div>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          login();
        }}
      >
        <TextField
          variant='outlined'
          required={true}
          fullWidth={true}
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          variant='outlined'
          required={true}
          fullWidth={true}
          name='password'
          label='Password'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type='submit'
          fullWidth={true}
          variant='contained'
          color='primary'
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
