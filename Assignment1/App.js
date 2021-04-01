import React from 'react';
import {  StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Navigation/AuthNavigator';
import TabNavigator from './Navigation/TabNavigator';


export default function App() {
    return (
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
       
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
    }
});
