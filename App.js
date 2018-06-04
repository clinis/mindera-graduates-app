/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button, View, Text, ListView, SectionList, FlatList, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, StackNavigator, TabNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';
import { Card, ListItem } from 'react-native-elements'

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
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'lightgrey'}}
        />
        <View style={{flex: 2}}>
          <FlatList
            data={this.state.events}
            renderItem={({item}) => (
              <View style={{marginTop: 20}}>
                <Text style={{fontWeight: 'bold', marginLeft: 15}}>{item.title}</Text>
                <FlatList
                  horizontal
                  data={item.data}
                  renderItem={({item}) => (
                    <TouchableWithoutFeedback
                      onPress={() => this.props.screenProps.rootNavigation.navigate('Day')}
                    >
                      <Card
                        title={item}
                        containerStyle={{paddingTop: 120, height: 160, width: 130, marginHorizontal: 5}}
                        dividerStyle={{display: 'none'}}
                      />
                    </TouchableWithoutFeedback>
                  )}
                />
              </View>
            )}
          />
        </View>
      </View>
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
      <View>
        {
          this.state.list.map((l, i) => (
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('DayList')}
            >
              <ListItem
                key={i}
                title={l}
              />
            </TouchableWithoutFeedback>
          ))
        }
      </View>
    );
  }
}

class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: listItems
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => (
            <View>
              <Card
                containerStyle={{width: 160, height: 160}}
              />
              <Text>{item}</Text>
            </View>
          )}
          numColumns={2}
        />
      </View>
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
          <Button
            title="menu"
            onPress={() => navigation.toggleDrawer()}
          />

        ),
        headerRight: (
          <Button
            title="Search"
            color="#fff0"
            onPress={() => alert('This is a button!')}
          />
        ),
      })
    },
    Day: {
      screen: DayScreen
    },
    DayList: {
      screen: ListScreen
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
    drawerWidth: 200,
    drawerBackgroundColor: '#23991b',
    contentOptions: {
      activeTintColor: '#99521d',
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