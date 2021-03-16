import React from 'react';
import {  StyleSheet, Text } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen.js';


export default function App() {
    return (
        <WelcomeScreen/>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
    }
});
