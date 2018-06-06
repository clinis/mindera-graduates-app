/**
 * Mindera Graduate Program React Native App
 * https://github.com/clinis/mindera-graduates-app
 * @flow
 */

import React from 'react'
import { YellowBox } from 'react-native'
import { RootNav } from './config/router'

// ignore warnings due to known react native issues
YellowBox.ignoreWarnings([
  'Warning: isMounted', /* see: https://github.com/oblador/react-native-collapsible/issues/167 */
]);

export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    )
  }
}
