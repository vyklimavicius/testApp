import React from 'react';
import { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import DetailScreen from './screens/DetailScreen.js';
import ListScreen from './screens/ListScreen.js';
import ImageScren from './screens/ImageScreen.js';

const HomeScreen = (props) => {
    
  const [count, setCount] = useState(0);

  return (
    <View style={style.container}>
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
      <View style={style.button}>
        <Button 
          title="Add to the count"
          onPress={() => setCount(count + 1)}
        />
      </View>
      <View style={style.button}>
        <Button 
          title="Reduce the count"
          onPress={() => setCount(count - 1)}
        />
      </View>
      <View style={style.button}>
        <Button 
          title="Reset the count!"
          onPress={() => setCount(0)}
          color='#D73525'
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
        <Text style={style.textStyle}>I'm an Touchable element. I'll take you to the Detail screen!</Text>
        </TouchableOpacity>
        <Text style={style.textStyle}>{count}</Text>
      </View>
      <View>
         <ActivityIndicator 
         size="large"
         color="#0000ff" 
         />
      </View>
    </View>
    
  );
};

const style = StyleSheet.create({
  container: {
    borderStyle: 'solid',
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'monospace',
    textAlign: "center",
    padding: 10
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 100,
    width: 200,
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



