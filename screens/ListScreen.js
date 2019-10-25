import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = (props) => {

    // console.log(props);
    

    const DATA = [
        { name: 'Vytautas', age: 36 ,key: '1'},
        { name: 'Ashley', age: 27,key: '2' },
        { name: 'Carlos', age: 35,key: '3' },
        { name: 'Roberto', age: 45,key: '4' },
        { name: 'Enrique', age: 56,key: '5' },
        { name: 'Marco',age: 62, key: '6' },
        { name: 'Julio', age: 73,key: '7' },
        { name: 'Domingo', age: 81,key: '8' },
        { name: 'Ricardo', age: 95,key: '9' }
    ];

    return (
        <View>
            <Text style={style.header}>I'm the list Screen</Text>
            <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    // console.log();
                    return <Text style={style.box}>{item.name}- Age:{item.age}</Text>
                 }
                }
                keyExtractor={( item ) => item.key}
            />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    header: {
        fontSize: 20,
        padding: 10
    },
    textStyle: {
        fontSize: 10
    },
    box : {
        borderStyle: "solid",
        borderWidth: 2,
        // marginVertical: 50
    }
});

export default ListScreen;