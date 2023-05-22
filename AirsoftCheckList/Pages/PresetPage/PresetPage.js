import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";


const PresetPage = ({ route, navigation }) => {
    const { preset } = route.params;
    console.log(preset);
    console.log(preset.items);
    const itemCount = Object.keys(preset.items).length;

    const [ShowDescription, setShowDescription] = React.useState(false);


    const [checkedItems, setCheckedItems] = React.useState([]);

    const toggleItem = (itemKey) => {
        if (checkedItems.includes(itemKey)) {
            setCheckedItems(checkedItems.filter((key) => key !== itemKey));
        } else {
            setCheckedItems([...checkedItems, itemKey]);
        }
    };

    React.useEffect(() => {
        console.log(ShowDescription);
        console.log(preset.ShowDescription);
        if (preset.ShowDescription == "true") {
            setShowDescription(true);
        } else if (preset.ShowDescription == "false"){ 
            setShowDescription(false);
        }
    }, []);

    return (
        <View>
            <Text style={styles.Title}>{preset.name}</Text>

            { ShowDescription ?
                <Text style={styles.description}>{preset.description}</Text>
                : 
                <Text></Text>
            }

            <Text style={styles.SubTitle}>Items</Text>
            <ScrollView style={styles.ScrollViewS}>
            {Object.entries(preset.items).map(([key, value]) => (
                <TouchableOpacity
                  key={key}
                  style={styles.itemContainer}
                  onPress={() => toggleItem(key)}
                >
                  <View style={[styles.checkbox, checkedItems.includes(key) && styles.checkedCheckbox]} />
                  <Text style={styles.itemText}>{`${value}`}</Text>
                </TouchableOpacity>
            ))}
            </ScrollView>

        {/* count */}
        <Text style={styles.totalcheck}>{checkedItems.length}/{itemCount}</Text>

        
        {/* uncheck all button */}
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => setCheckedItems([])}
        >
            <View style={[styles.checkbox, styles.uncheckallCheckbox]} />
            <Text style={styles.itemText}>Uncheck All</Text>
        </TouchableOpacity>

        { checkedItems.length == itemCount ?
            <Text style={styles.verified}>You have checked all items!</Text>
            :
            null    
        }
        </View>
    );
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: 50,
    },
    SubTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        // textAlign: "center",
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    description: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        // textAlign: "center",
        marginTop: 15,
        marginLeft: 20,
    },
    items: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        // textAlign: "center",
        marginTop: 15,
        marginLeft: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000000',
        marginRight: -10,
        marginLeft: 20,
      },
      checkedCheckbox: {
        backgroundColor: 'green',
      },
      itemText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        marginLeft: 20,
      },
        totalcheck: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: 50,
    },
    uncheckallCheckbox: {
        backgroundColor: 'red',
    },
    verified: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'lightgreen',
    },
    ScrollViewS: {
        height: "48%",
    },

});

export default PresetPage;