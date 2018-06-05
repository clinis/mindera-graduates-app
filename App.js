/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Button, FlatList, ScrollView, Text, TouchableHighlight, View, YellowBox } from 'react-native'
import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { Icon, ListItem } from 'react-native-elements'

import { events, dayList, listItems} from './data'

// ignore warnings due to known react native issues
YellowBox.ignoreWarnings([
  'Warning: isMounted', /* see: https://github.com/oblador/react-native-collapsible/issues/167 */
]);

class Event extends React.Component {
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


class EventsScreen extends React.Component {
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

class DayScreen extends React.Component {
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

class GalleryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: listItems
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('list', 'List')
    };
  };

  render() {
    return (
      <FlatList
        data={this.state.list}
        contentContainerStyle={{
          paddingLeft: 10,
          paddingRight: 10
        }}
        renderItem={({item}) => (
          <View style={{
            flex: 1,
            alignItems: 'center',
            width: 160,
            minHeight: 160,
            maxHeight: 200,
            marginTop: 20
          }}>
            <View>
              <View style={{height: 160, width: 160, backgroundColor:'darkgrey'}} />
              <Text style={{marginTop: 5}}>{item}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item}
      />
    );
  }
}

class VacanciesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Vacancies Screen</Text>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
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

const TabNav = createMaterialTopTabNavigator(
  {
    Events: {
      screen: EventsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Events'
      }),
    },
    Vacancies: {
      screen: VacanciesScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Vacancies'
      }),
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#5c6b78'
      },
      indicatorStyle: {
        backgroundColor: '#ffffff'
      },
      upperCaseLabel: false
    }
  }
)

const StackNav = createStackNavigator(
  {
    Tabs: {
      screen: ({ navigation }) => <TabNav screenProps={{ rootNavigation: navigation }} />,
      navigationOptions: ({ navigation }) => ({
        title: 'Meet Mindera',
        headerLeft: (
          <Icon
            name="menu"
            color='#ffffff'
            containerStyle={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerRight: (
          <Icon
            name="search"
            color='#ffffff'
            containerStyle={{marginRight: 10}}
            onPress={() => alert('You found it!')}
          />
        ),
      })
    },
    Day: {
      screen: DayScreen
    },
    Gallery: {
      screen: GalleryScreen
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5c6b78'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const RootNav = createDrawerNavigator(
  {
    Home: {
      screen: StackNav
    },
    About: {
      screen: AboutScreen
    },
  },
  {
    drawerPosition: 'left',
    drawerWidth: 200,
    drawerBackgroundColor: '#f8cc21',
    contentOptions: {
      activeTintColor: '#ffffff'
    }
  }
);


export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    )
  }
}
