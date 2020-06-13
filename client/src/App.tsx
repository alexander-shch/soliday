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
import authState from './services/auth';

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
  };
  auth = authState.subscribe((token) => {
    this.setState({ loggedIn: Boolean(token) });
  });

  componentWillUnmount() {
    this.auth.unsubscribe();
  }

  render() {
    if (this.state.loggedIn) {
      return <ContentComponent>This is profile page</ContentComponent>;
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
