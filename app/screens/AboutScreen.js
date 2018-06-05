import React from 'react'
import { Button, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dinis Areias</Text>
        <Icon
          name="person"
        />
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}