import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { Event } from './event'

export class EventsGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      events: this.props.events,
      nav: this.props.nav
    }
  }

  render () {
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{height: 180, backgroundColor: 'darkgrey'}}
        />
        <FlatList
          data={this.state.events}
          renderItem={({item}) => (
            <View style={{marginTop: 20, marginLeft: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.title}</Text>
              <Event
                eventName={item.title}
                eventDays={item.days}
                nav={this.state.nav}
              />
            </View>
          )}
          keyExtractor={(item) => item.title}
        />
      </ScrollView>
    )
  }
}