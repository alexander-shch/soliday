import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
import SideBar from './components/side-bar/side-bar.component';
import NavBar from './components/nav-bar/nav-bar.component';
import UserAuthServiceContainer, {
  UserAuthService,
  UserAuthServiceModel,
} from './services/user-auth.service';
import LoginComponent from './view/login';

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
  render() {
    return (
      <UserAuthServiceContainer>
        <UserAuthService.Consumer>
          {(state: UserAuthServiceModel) => {
            if (state.state) {
              return (
                <div id='app-container'>
                  <BrowserRouter>
                    <NavBar />
                    <div className='page-content-wrapper'>
                      <SideBar />
                      <ContentComponent>
                        <ReactNotification />
                        <MainAppRouter />
                      </ContentComponent>
                    </div>
                  </BrowserRouter>
                </div>
              );
            }
            return <LoginComponent />;
          }}
        </UserAuthService.Consumer>
      </UserAuthServiceContainer>
    );
  }
}

export default class App extends Component {
  render() {
    return <IsLoggedIn />;
  }
}
