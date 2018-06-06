import React from 'react'

import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { GalleryScreen } from '../screens/GalleryScreen'
import { EventsScreen } from '../screens/EventsScreen'
import { DayScreen } from '../screens/DayScreen'
import { VacanciesScreen } from '../screens/VacanciesScreen'
import { AboutScreen } from '../screens/AboutScreen'

export const TabNav = createMaterialTopTabNavigator(
  {
    Events: {
      screen: EventsScreen
    },
    Vacancies: {
      screen: VacanciesScreen
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

export const StackNav = createStackNavigator(
  {
    Tabs: {
      screen: ({navigation}) => <TabNav screenProps={{rootNavigation: navigation}}/>,
      navigationOptions: ({navigation}) => ({
        title: 'Meet Mindera',
        headerLeft: (
          <Icon
            name="menu"
            color='#ffffff'
            containerStyle={{marginLeft: 15}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerRight: (
          <Icon
            name="search"
            color='#ffffff'
            containerStyle={{marginRight: 15}}
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
)

export const RootNav = createDrawerNavigator(
  {
    Home: {
      screen: StackNav
    },
    About: {
      screen: createStackNavigator({
        About: {
          screen: AboutScreen
        }
      })
    }
  },
  {
    drawerPosition: 'left',
    drawerWidth: 200,
    drawerBackgroundColor: '#f8cc21',
    contentOptions: {
      activeTintColor: '#ffffff'
    }
  }
)