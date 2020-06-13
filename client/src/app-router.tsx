import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import LoggedOutComponent from './view/loggedOut';

export interface AppRoute {
  path: string;
  hash?: string;
  title?: string;
  component: any;
  exact?: boolean;
  /** Name of fontAwesome icon (must be imported and added to the library in App.tsx) */
  icon?: IconProp;
}

export const adminAppRoutes: AppRoute[] = [
  {
    path: '/login',
    component: LoggedOutComponent,
  },
];

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {adminAppRoutes.map((route: AppRoute, index: number) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    );
  }
}
