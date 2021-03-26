import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import AppColors from '../config/AppColors';
import AppText from './AppText';


function AppCard({title, subtitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>

            
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.inputTextBackground,
        borderRadius: 25,
        overflow:"hidden",
        marginBottom: 25,
    },
    image:{
        height: 200, 
        width:"100%",
    },
    title:{
        fontWeight: "bold",

    },
    subtitle:{
        fontSize: 16,
    },

    
})

export default AppCard;