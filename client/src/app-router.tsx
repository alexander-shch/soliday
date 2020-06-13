import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './view/main/main';

const SafePaths = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainView} />
    </Switch>
  );
};

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={SafePaths} />
      </Switch>
    );
  }
}
