import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import  appStore  from './stores/AppStore'
import Navigation from './Navigation'

export default class App extends Component {
  render() {
    return (
      <Provider appStore={appStore}>
        <Navigation/>
      </Provider> 
    );
  }
}

