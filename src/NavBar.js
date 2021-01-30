import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NavBar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: '#7952B3',
    },
})