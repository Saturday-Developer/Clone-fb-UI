import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Animated
} from 'react-native';
import { Header } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SearchBar extends Component {
  render() {
    return (
      <Header searchBar rounded>
        <View style={styles.searchBar}>
          <FontAwesome name='camera' color='white' size={26} />
          <TextInput
            placeholder='search'
            placeholderTextColor='rgba(255,255,255,0.5)'
            underlineColorAndroid='#fff'
            style={styles.search}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons
              name='facebook-messenger'
              style={styles.messengerIcon}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  search: {
    width: '80%',
    left: 5,
    fontSize: 18
  },
  messengerIcon: {
    color: '#fff',
    left: 5,
    top: 3
  }
});
