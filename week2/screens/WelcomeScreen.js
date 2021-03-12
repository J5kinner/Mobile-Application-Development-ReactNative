import React from 'react';
import { View, Stylesheet, ImageBackground, Platform } from 'react-native';

import { MaterialCommunityIcons} from '@expo/vector-icons'
import AppScreen from './components/AppScreen'
import AppText from './components/AppText'
import AppColors from './config/AppColors';

const blueRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen(props) {
    return (
        <AppScreen>
            <ImageBackground
            source={require("../assets/standardboard.png")}
            style = {styles.background}
            blurRadius={blurRadiusValue}
            >
                <View style = {styles.welcomeContainer}>
                    <MaterialCommunityIcons
                    name="chess-king"
                    size={75}
                    color={AppColors.blue}
                    />
                <AppText>Welcome to Chess</AppText>

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
      backgroundColor: 'red',  
      justifycontent: 'center',
      alignItems: 'center',
      marginTop:20,
    },
})

export default WelcomeScreen;