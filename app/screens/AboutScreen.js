import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export class AboutScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'About this app',
      headerStyle: {
        backgroundColor: '#5c6b78'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <Icon
          name="menu"
          color='#ffffff'
          containerStyle={{marginLeft: 10}}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    }
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Icon name="extension"/>
          <Text>Mindera Graduate Program React Native App</Text>
        </View>
        <View style={{marginTop: 15}}>
          <Icon name="person"/>
          <Text>Dinis Areias</Text>
        </View>
        <View style={{marginTop: 15}}>
          <Icon name="email"/>
          <Text>dinis.areias@gmail.com</Text>
        </View>
      </View>
    )
  }
}