import * as React from 'react';
// import React, { useState } from "react";
import { get, post } from '../utils/http'
import {
    Text, View, Button, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 0,
    },
    itemtext: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    thumbnail: {
        height: 80
    },
    firstview: {
        height: 50,
        backgroundColor: 'cyan',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#bbb",
        padding: 10
    },
});


export default function Home({ navigation }) {
    const [buttonText, setButtonText] = React.useState("Click me,   please");
    const [listdata, setListdata] = React.useState([]);
    React.useEffect(() => {
        console.log("componentDidMount");
        post('http://192.168.31.65:8899/api/img')
            .then(res => {
                if (res.code == 200) {
                    console.log(res.data.list)
                    setListdata(res.data.list)
                }
            })
            .catch(err => {
                console.log(err)
            })

        return function cleanup() { console.log("组件被卸载componentWillUnmount") };
    }, []);

    return (
        <View style={styles.itemsList}>
            <View style={styles.firstview}></View>
            <Image
                source={{ uri: 'http://192.168.31.65:8899/images/img1.png' }}
                style={styles.thumbnail}
            />
            <ScrollView style={{ height: 200 }}>
                {listdata.map((item, index) => {
                    return (
                        <View key={index} style={{ height: 100 }}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail', { id: item.id })} >
                                <Text style={styles.itemtext}>{item.url}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView >

        </View>
    );
}