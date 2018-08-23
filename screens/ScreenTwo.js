import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { inject, observer } from 'mobx-react';
@inject('appStore')
@observer


export default class ScreenTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.appStore.test}
        </Text>
        <Text style={styles.instructions}>
          ScreenTwo
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
