import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-elements';



const CardUI = (props) => {

    return (
      <View>
        <TouchableOpacity onPress={() => props.detail()}>
          <Card title="Task"> 
            <Avatar 
              rounded
              size="medium"
              icon={{name: 'home'}}
              containerStyle={{padding: 5, marginLeft: 150}}
            />
            <Text style={style.text}>📜 </Text>
          </Card>
        </TouchableOpacity>
      </View>
    )
};

const style = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 15,
        fontFamily: 'monospace'
    }
});

export default CardUI;