/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button, View, Text, ListView, SectionList, FlatList, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { Card } from 'react-native-elements'


const events = [
  {title: "Open Day '18", data: ['Day 01', 'Day 02', 'Day 03', 'Day 4', 'Day 5']},
  {title: "Graduate Program", data: ['First day', 'Second day', 'Last day']},
  {title: 'Meet Mindera Code & Culture', data: ['Day 19', 'Day 20']},
];

const dayList = ["List 01", "List 02", "List 03", "List 04", "List 05", "List 06", "List 07", "List 08", "List 09", "List 10"]

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
                      /*onPress={() => alert('This is a button!')}*/
                      onPress={() => this.props.navigation.navigate('Day')}
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
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Day Screen</Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Events')}
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
        <Button
          title="Go to Options"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Options', {
              itemId: 86,
              otherParam: 'anything',
            });
          }}
        />
      </View>
    );
  }
}

class OptionsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

        <Button
          title="Go to Options... again"
          onPress={() => this.props.navigation.push('Options')}
        />
        <Button
          title="Go to Events (Home)"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
      </View>
    );
  }
}

const TabNav = TabNavigator(
  {
    Home: {
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
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#5c6b78',
      }
    }
  }
)

const Nav = StackNavigator(
  {
    Home: {
      screen: TabNav,
      navigationOptions: ({ navigation }) => ({
        title: 'Meet Mindera',
      }),
    },
    Day: {
      screen: DayScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Day'
      }),
    },
    Options: {
      screen: OptionsScreen,
      navigationOptions: ({ navigation }) => ({}),
    },
  },
  {
    initialRouteName: 'Home',

    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5c6b78',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      /*headerLeft: (
        <Button
          title="Menu"
          color="#0009"
        />
      ),
      headerRight: (
        <Button
          title="Search"
          color="#fff0"
          onPress={() => alert('This is a button!')}
        />
      ),*/
    },
  }
);


export default class App extends React.Component {
  render() {
    return (
      <Nav />
    )
  }
}