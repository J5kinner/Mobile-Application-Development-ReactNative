import React from 'react';

import { Text, StyleSheet, Platform } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.container}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:100,
        fontFamily: Platform.OS === 'android' ? "monospace" : "Cochin",
    }
})

export default AppText;