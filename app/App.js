/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { YellowBox } from 'react-native'
import { RootNav } from './config/router'

// ignore warnings due to known react native issues
YellowBox.ignoreWarnings([
  'Warning: isMounted', /* see: https://github.com/oblador/react-native-collapsible/issues/167 */
]);


class Ho extends React.Component {
  render() {
    return (
      <RootNav />
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Ho />
    )
  }
}
