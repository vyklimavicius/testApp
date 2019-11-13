import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';


const CardDetail = () => {
    return (
        <View>
            <Card title='Details'>
                <Text>I'm a Task detail</Text>  
            </Card>
        </View>
    );
};

export default CardDetail;