import React, { Component } from 'react';
import { ScrollView, Animated } from 'react-native';
import UploadPosts from './UploadPosts';
import Story from './Story';

import Posts from './Posts';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <UploadPosts />
        <Story />
        <Posts />
      </ScrollView>
    );
  }
}
