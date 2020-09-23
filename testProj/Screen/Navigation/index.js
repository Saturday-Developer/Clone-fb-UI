import React, { Component } from 'react';
import { View } from 'react-native';

import {
  createMaterialTopTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { Badge, Text } from 'native-base';

import Home from '../Home';
import FriendRequest from '../FriendRequest';
import Notification from '../Notification';
import Setting from '../Setting';
import Profile from '../Profile';
import SearchBar from '../SearchBar';

const TopTabBar = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <EntypoIcon
            name='image'
            size={24}
            adjustsFontSizeToFit={true}
            color={tintColor}
          />
        )
      }
    },
    FriendRequest: {
      screen: FriendRequest,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons
            name='people'
            adjustsFontSizeToFit={true}
            size={24}
            color={tintColor}
          />
        )
      }
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            name='user-circle'
            adjustsFontSizeToFit={true}
            size={24}
            color={tintColor}
          />
        )
      }
    },

    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={{ flexDirection: 'row' }}>
            <Badge style={{ left: 16 }} adjustable={true}>
              <Text>9 </Text>
            </Badge>
            <SimpleLineIcons
              name='bell'
              adjustsFontSizeToFit={true}
              size={24}
              color={tintColor}
              style={{ position: 'absolute' }}
            />
          </View>
        )
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            name='bars'
            adjustsFontSizeToFit={true}
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      swipeEnabled: true,
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      pressColor: 'blue',
      scrollEnabled: true,
      indicatorStyle: {
        backgroundColor: 'gray'
      },
      style: {
        backgroundColor: 'white'
      }
    }
  }
);

const MainNav = createStackNavigator({
  TopTabBar: {
    screen: TopTabBar,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        header: <SearchBar {...navigation} {...screenProps} />
      };
    }
  }
});

const Nav = createAppContainer(MainNav);

export default Nav;
