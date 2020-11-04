import React, {Component} from 'react';

import Navigation from './config/Navigation';

import GeneralStatusBarColor from './components/GeneralStatusBarColor';
import {Colors} from './themes';

export default class App extends Component {
  render() {
    return (
      <>
        <GeneralStatusBarColor
          backgroundColor={'#A8A8A8'}
          barStyle="light-content"
        />
        <Navigation />
      </>
    );
  }
}
