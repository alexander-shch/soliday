import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import ContentComponent from './components/content/content.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faHome,
  faUserFriends,
  faUser,
  faCircle,
  faExternalLinkAlt,
  faCheckCircle,
  faTimesCircle,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';

import MainAppRouter from './app-router';
import NavBar from './components/nav-bar/nav-bar.component';
import LoginComponent from './view/login';
import authState, { getUserData } from './services/auth';
import { Subscriber } from 'rxjs';
import { User } from '../../server/src/models/user';

library.add(
  faCog,
  faHome,
  faUserFriends,
  faUser,
  faCircle,
  faExternalLinkAlt,
  faCheckCircle,
  faTimesCircle,
  faSyncAlt
);

class IsLoggedIn extends Component {
  state = {
    loggedIn: false,
    user: {},
  };
  subs = new Subscriber();

  componentDidMount() {
    getUserData();
    this.subs.add(
      authState.subscribe(({ user }) => {
        this.setState({ loggedIn: Boolean(user), user });
      })
    );
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <ContentComponent>{JSON.stringify(this.state.user)}</ContentComponent>
      );
    }
    return <LoginComponent />;
  }
}

export const MainRouter: React.FC<any> = () => {
  return (
    <Switch>
      <Route path='/' exact={true} component={MainAppRouter} />
      <Route path='/profile' exact={true} component={IsLoggedIn} />
    </Switch>
  );
};

export default class App extends Component {
  render() {
    return (
      <>
        <ReactNotification />
        <BrowserRouter>
          <NavBar />
          <MainRouter />
        </BrowserRouter>
      </>
    );
  }
}
