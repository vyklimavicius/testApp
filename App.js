import React from 'react';
import { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, TextInput, Image, ImageBackground, ScrollView, Button } from 'react-native';
import { Icon } from 'react-native-elements'
import DetailScreen from './screens/DetailScreen.js';
import ListScreen from './screens/ListScreen.js';
import ImageScren from './screens/ImageScreen.js';
import CardUI from './screens/CardUI.js';
import Constants from 'expo-constants';

const HomeScreen = (props) => {
    
  const [tasks, setTasks] = useState([]);
  
  let count = 0;

  const addTask = () => {
    setTasks([...tasks, 1]);
  };

  return (
    <View style={style.container}>
      <ImageBackground source={require('./assets/wood.jpg')} style={{ width: '100%', height: '100%' }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
        <Text style={style.headerCard}>HomeScreen</Text>
        </TouchableOpacity>
        <Icon
          name="add"
          color='#3A4893'
          size={200}
          onPress={() => {addTask()}}
        />
      {/* <TextInput
        style={style.textInput}
        onChangeText={ input => setInput(input)}
        value={input}
        placeholder={"Type a task"}
      /> */}
      {tasks.length === 0 ? null :
        <View style={style.scroll} >
            <ScrollView horizontal={true} contentContainerStyle={style.scrollView}>
      {tasks.map( task => {
         count++;
         return <CardUI key={count}/>;
       })}
          </ScrollView>
        </View>
        }
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderStyle: 'solid',
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 100,
    width: 200,
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    margin: 10,
    paddingLeft: 5,
    backgroundColor:'#ffffff'
  },
  headerCard: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'monospace',
    textAlign: "center",
    padding: 10,
    backgroundColor: '#3A4893',
    borderStyle: "solid",
    color: "#ffffff",
    borderRadius: 10,
  },
  scroll: {
    flex: 1,
    // flexDirection: 'row',
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    alignItems: 'flex-start'
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
      headerTitle: (
        <View>
          <Image 
            source={require('./assets/medal.png')}
            style={{width: 50, height: 50}}
          />
          <Text style={{
            position: "absolute",
            textAlign: 'center',
            width:100,
            top: 8,
            left: 50,
            fontSize: 20,
            color: '#ffffff',
            fontFamily: 'monospace'}}>TodoList</Text>
        </View>
      ),
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#3A4893'
      }
    }
  }
);

export default createAppContainer(AppNavigator);



/* <View style={style.button}>
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
      </View> */

/* <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
  <Icon
    name="android"
    style={style.icon}
  />
</TouchableOpacity> */

/* <ActivityIndicator
  size={200}
  color="#3A4893"
  style={{ marginTop: 60 }}
/> */