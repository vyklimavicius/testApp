import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import DetailScreen from './screens/DetailScreen.js';
import ListScreen from './screens/ListScreen.js';

const HomeScreen = (props) => {
    
  return (
    <View>
      <Text style={style.textStyle}>HomeScreen</Text>
      <View style={style.button}>
      <Button 
        title="Send me to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button 
        title="Send me to List"
        onPress={() => props.navigation.navigate('List')}
      />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
  }
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
    }
  }
);

export default createAppContainer(AppNavigator);



