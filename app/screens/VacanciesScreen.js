import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export class VacanciesScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Vacancies'
    }
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>Vacancies Screen</Text>
        <Icon name="beach-access" size={80}/>
      </View>
    )
  }
}