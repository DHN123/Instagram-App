import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';
import { MainFeed, Login, Camera, Profile } from './components/screens';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
  });

const MainStack = createSwitchNavigator({
    login:{screen:Login},
    main: {screen:Tabs}
  });
  
  const AppContainer = createAppContainer(MainStack);
  
  
  class InstaClone extends Component {
    render() {
      return  <AppContainer/>;
    }
  }
  
  export default (InstaClone);