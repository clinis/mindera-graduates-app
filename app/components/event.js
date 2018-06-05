import React from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'

export class Event extends React.Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress = (day) => {
    this.props.nav.navigate('Day', {event: this.props.eventName, day: day})
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal
          data={this.props.eventDays}
          renderItem={({item }) => (
            <TouchableHighlight
              onPress={() => this.handlePress(item)}
            >
              <View style={{
                marginTop: 5,
                marginRight: 15,
                width: 130,
                height: 160,
                backgroundColor: 'darkgrey'
              }}>
                <Text style={{marginTop: 125, textAlign: 'center', fontSize: 18, fontWeight: "300", color: 'white'}}>{item}</Text>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    )
  }
}
