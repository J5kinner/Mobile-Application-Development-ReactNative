import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppColors from '../config/AppColors';


function AppButton({title}) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.text}> {title} </Text>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.blue,
        borderRadius: 10,
        width: '100%',
        padding: 11,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: AppColors.green,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})

export default AppButton;

