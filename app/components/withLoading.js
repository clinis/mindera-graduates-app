import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading)
      return (
        <Component {...props} />
      );

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="cloud-download"/>
        <Text>Loading...</Text>
      </View>
    );
  }
}
export default WithLoading;