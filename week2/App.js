import React from 'react';
import {  StyleSheet, Text } from 'react-native';

import AppScreen from './components/AppScreen.js';

export default function App() {
    return (
        <AppScreen style={styles.container}>
            <Text>Figured out appscreen finally</Text>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lightblue',
    }
});
