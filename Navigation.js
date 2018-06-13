
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home'
import ScreenTwo from './screens/ScreenTwo'

export default createStackNavigator({
  Home: Home,
  ScreenTwo: ScreenTwo
});

