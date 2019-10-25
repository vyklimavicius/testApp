import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import DetailScreen from './screens/DetailScreen.js';
import ListScreen from './screens/ListScreen.js';

const HomeScreen = (props) => {
  // console.log(props);
  
  return (
    <View>
      <Button 
        title="Send me to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 10
  },
}
);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      title: 'TestApp',
      headerTitle: (
      <Image 
       style = {{width: 50, height: 50}}
       source = {require('./images/medal.png')}
      />
      )
    }
  }
);

export default createAppContainer(AppNavigator);



