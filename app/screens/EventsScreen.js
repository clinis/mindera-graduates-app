import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { Event } from '../components/event'

import { events } from '../data'

export class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{height:200, backgroundColor:'darkgrey'}}
        />
        <FlatList
          data={this.state.events}
          renderItem={({item}) => (
            <View style={{marginTop: 20, marginLeft: 15}}>
              <Text style={{fontWeight: '400', fontSize: 18}}>{item.title}</Text>
              <Event
                eventName = {item.title}
                eventDays = {item.days}
                nav = {this.props.screenProps.rootNavigation}
              />
            </View>
          )}
          keyExtractor={(item) => item.title}
        />
      </ScrollView>
    );
  }
}