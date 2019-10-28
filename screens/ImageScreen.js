import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


const ImageScreen = (props) => {

    return (
            <View>


                <Text style={style.text}>{props.title}</Text>
                <Image
                source={require('../assets/bridge.jpg')}
                style={style.image}
                />

            </View>
        )

};

const style = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});

export default ImageScreen;