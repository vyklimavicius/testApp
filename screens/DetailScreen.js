import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DetailScreen = () => {
    return (
        <Text style={styles.textStyle}>This is the Detail screen!</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default DetailScreen;