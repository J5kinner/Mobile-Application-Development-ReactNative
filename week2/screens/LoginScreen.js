import React from 'react';

import { View, StyleSheet, TextInput } from 'react-native';

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="type your fav Chess player"
            secureTextEntry={true}
            keyboardType="phone-pad"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        marginTop:100,
        marginLeft:100,
    }
})
export default LoginScreen;