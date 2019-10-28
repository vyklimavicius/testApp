import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageScreen from './ImageScreen';
import Constants from 'expo-constants';


const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.textStyle}>This is the Detail screen!</Text>
                <ImageScreen title={'First'}/>
                <ImageScreen title={'Second'}/>
                <ImageScreen title={'Third'} />
                <ImageScreen title={'Fourth'}/>
                <ImageScreen title={'Fifth'}/>
                <ImageScreen title={'Sixth'}/>
                <ImageScreen title={'Seventh'} />
                <ImageScreen title={'Eigth'}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    scroll: {
        marginHorizontal: 20,
    }
});

export default DetailScreen;