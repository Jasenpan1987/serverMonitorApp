/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainContainer from './components/MainContainer';

class servermonitorApp extends Component {
  render() {
    return (
        <MainContainer/>
    );
  }
}


AppRegistry.registerComponent('servermonitorApp', () => servermonitorApp);
