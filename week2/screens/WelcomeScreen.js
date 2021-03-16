import React from 'react';
import { View, StyleSheet, ImageBackground, Platform } from 'react-native';

import { MaterialCommunityIcons} from '@expo/vector-icons'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';

const blueRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen(props) {
    return (
        <AppScreen>
            <ImageBackground
            source={require("/home/jonah/Desktop/COMP3130/Mobile-Applications-Development/week2/assets/standardboard.png")}
            style = {styles.background}
            blurRadius={blueRadiusValue}
            >
                <View style = {styles.welcomeContainer}>
                    <MaterialCommunityIcons
                    name="chess-king"
                    size={75}
                    color={AppColors.white}
                    />
                <AppText>Welcome to Chess</AppText>

                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login"/>
                    <AppButton title="Register" color="blue"/>

                </View>
                
            </ImageBackground>
        </AppScreen>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    welcomeContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:43,
    },
    buttonContainer: {
        marginTop: 300,
        marginRight: 30,
        flexDirection: 'column',
        height: 150,
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        width: '50%'


    },
})

export default WelcomeScreen;