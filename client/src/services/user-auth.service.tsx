import React, { Component } from 'react';

export interface UserAuthServiceModel {
  state: string | null;
  setState: (token: string) => void;
}

export const UserAuthService = React.createContext<UserAuthServiceModel>({
  state: null,
  setState: () => void 0,
});

export default class UserAuthServiceContainer extends Component {
  state = {
    token: localStorage.getItem('token'),
  };

  setNewUserState(token: string) {
    localStorage.setItem('token', token);
    this.setState({ token });
  }

  render() {
    return (
      <UserAuthService.Provider
        value={{
          state: this.state.token,
          setState: this.setNewUserState.bind(this),
        }}
      >
        {this.props.children}
      </UserAuthService.Provider>
    );
  }
}
