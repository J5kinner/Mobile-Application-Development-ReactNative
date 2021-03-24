import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppColors from '../config/AppColors';


function AppButton({title, color="maroon", onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, {backgroundColor: AppColors[color]}]}>
                <Text style={styles.text}> {title} </Text>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.maroon,
        borderRadius: 10,
        width: '100%',
        padding: 11,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: AppColors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})

export default AppButton;

