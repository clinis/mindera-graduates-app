/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button, View, Text, ListView, SectionList, FlatList, ScrollView, Image, TouchableHighlight } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, StackNavigator, TabNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';
import { Card, ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'


const events = [
  {title: "Open Day '18", data: ['Day 01', 'Day 02', 'Day 03', 'Day 4', 'Day 5']},
  {title: "Graduate Program", data: ['First day', 'Second day', 'Last day']},
  {title: 'Meet Mindera Code & Culture', data: ['Day 19', 'Day 20']},
];

const dayList = ["List 01", "List 02", "List 03", "List 04", "List 05", "List 06", "List 07", "List 08", "List 09", "List 10"]

const listItems = ["Description 01", "Description 02", "Description 03", "Description 04", "Description 05", "Description 06", "Description 07"]

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
              <FlatList
                horizontal
                data={item.data}
                renderItem={({item}) => (
                  <TouchableHighlight
                    onPress={() => this.props.screenProps.rootNavigation.navigate('Day')}
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
              />
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

class DayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: dayList
    };
  }

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.list}
        renderItem={({item}) => (
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Gallery')}
          >
            <ListItem title={item} hideChevron />
          </TouchableHighlight>
        )}
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

const TabNav = TabNavigator(
  {
    Events: {
      screen: EventsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Events',
      }),
    },
    Vacancies: {
      screen: VacanciesScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Vacancies',
      }),
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#5c6b78',
      }
    }
  }
)

const StackNav = StackNavigator(
  {
    Tabs: {
      screen: ({ navigation }) => <TabNav screenProps={{ rootNavigation: navigation }} />,
      navigationOptions: ({ navigation }) => ({
        title: 'Meet Mindera',
        headerLeft: (
          <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
            <Icon
              name="menu"
            />
          </TouchableHighlight>
        ),
        headerRight: (
          <TouchableHighlight onPress={() => alert('You found it!')}>
            <Icon
              name="search"
            />
          </TouchableHighlight>
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
        backgroundColor: '#5c6b78',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

const RootNav = DrawerNavigator(
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
    drawerWidth: 250,
    drawerBackgroundColor: '#beba32',
    contentOptions: {
      activeTintColor: '#ffffff',
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
