import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

const CardUI = ({ text }) => {

    return (
        <Card title="Task" > 
          <Avatar 
            rounded
            size="medium"
            icon={{name: 'home'}}
            containerStyle={{padding: 5, marginLeft: 150}}
          />
          <Text style={style.card}>📜 {text}</Text>
        </Card>
    )
};

const style = StyleSheet.create({
    card: {
        marginTop: 10,
        fontSize: 15,
        fontFamily: 'monospace'
    }
});

export default CardUI;