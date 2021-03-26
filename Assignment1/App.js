import React from 'react';
import {  StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Navigation/AuthNavigator';
import HomeScreen from './screens/HomeScreen';

import MyBangerScreen from './screens/MyBangerScreen';
import MyArtistScreen from './screens/MyArtistScreen';

export default function App() {
    return (
        // <NavigationContainer>
        //     <AuthNavigator/>
        // </NavigationContainer>
        <MyArtistScreen/>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
    }
});
