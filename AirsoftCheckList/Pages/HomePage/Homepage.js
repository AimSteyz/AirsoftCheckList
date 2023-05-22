import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import jsonpreset from "../../assets/preset.json";

const Homepage = ({navigation}) => {

    console.log(jsonpreset);
    const presetLength = Object.keys(jsonpreset).length;
    console.log(presetLength);

    return (
        <View>
            <Text style={styles.SubTitle}>Your presets :</Text>
            {Object.keys(jsonpreset).map((key) => (
                <TouchableOpacity
                    key={key}
                    onPress={() => navigation.navigate("Preset", { preset: jsonpreset[key] })}
                >
                    <Text style={styles.preset}>{jsonpreset[key].name}</Text>
                </TouchableOpacity>
            ))}

        </View>
    );
};


const styles = StyleSheet.create({
    Title: {
        fontSize: 50,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: 50,
    },
    SubTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        // textAlign: "center",
        marginTop: 50,
        marginLeft: 20,
    },
    preset: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        // textAlign: "center",
        marginTop: 20,
        marginLeft: 20,
    },
    addpreset: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
        textAlign: "center",
        marginTop: 20,
        marginLeft: 20,
    },
});

export default Homepage;