import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';



function MyBangerScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <AppCard 
                title="All Star" subtitle=" Smash Mouth"
                image={require("../assets/smash.jpeg")}
                />

            <AppCard 
                title="No Good" subtitle="Kaleo"
                image={require("../assets/Kaleo.jpg")}
                />

            
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        flex: 1,
      },
})

export default MyBangerScreen;