import React from 'react'
import { dayList } from '../data'
import { FlatList, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'

export class DayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: dayList,
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress = (list) => {
    this.props.navigation.navigate('Gallery', {list: list})
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('event', 'Event') + " _ " + navigation.getParam('day', 'day')
    };
  };

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({item}) => (
          <View style={{ marginLeft: 10, marginRight: 10}}>
            <ListItem
              title={<Text style={{marginTop: 8, marginBottom: 8}}>{item}</Text>}
              hideChevron
              onPress={() => this.handlePress(item)}
            />
          </View>
        )}
        keyExtractor={(item) => item}
      />
    )
  }
}