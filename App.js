import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import DetailScreen from './screens/DetailScreen.js';
import ListScreen from './screens/ListScreen.js';
import ImageScren from './screens/ImageScreen.js';

const HomeScreen = (props) => {
    
  return (
    <View>
      <Text style={style.textStyle}>HomeScreen</Text>
      <View style={style.button}>
        <Button 
          title="Send me to Details"
          onPress={() => props.navigation.navigate('Details')}
        />
      </View>
      <View style={style.button}>
        <Button 
          title="Send me to List"
          onPress={() => props.navigation.navigate('List')}
        />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
      <Text style={style.textStyle}>I'm an Touchable element. I'll take you to the Detail screen!</Text>
      </TouchableOpacity>
      {/* <ImageScren /> */}
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    padding: 10
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20
  }
}
);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
    List: ListScreen,
    Images: ImageScren
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      title: 'TestApp',
    }
  }
);

export default createAppContainer(AppNavigator);



