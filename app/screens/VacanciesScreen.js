import React from 'react'
import { Text, View } from 'react-native'

export class VacanciesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Vacancies'
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Vacancies Screen</Text>
      </View>
    );
  }
}