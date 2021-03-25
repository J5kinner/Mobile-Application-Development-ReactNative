import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';

function AppText({style, children}) {
    return (
        <Text style={[styles.container, style]}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:100,
        fontFamily: Platform.OS === 'android' ? "monospace" : "Cochin",

    }
})

export default AppText;