import React from 'react';
import {  StyleSheet, Text } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen';
import TestScreen from './screens/TestScreen';

export default function App() {
    return (
        <TestScreen/>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
    }
});
