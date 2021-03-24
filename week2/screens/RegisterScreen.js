import React, {useState} from 'react';

import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';

import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';


function RegisterScreen(props) {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="baguette"
          size={90}
          color={AppColors.maroon}
        />
      </View>
      <View style={styles.textInputContainer}>
        <AppTextInput
          icon="account"
          placeholder="First Name"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={inputEmail => setEmail(inputEmail)}
        />
      <View style={styles.textInputContainer}>
        <AppTextInput
          icon="email"
          placeholder="Email Address"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={inputEmail => setEmail(inputEmail)}
        />
        <AppTextInput
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
          onChangeText={inputPassword => setPassword(inputPassword)}

        />
      </View>
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background,
        padding:25,
      },
      welcomeContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 43,
      },
      textInputContainer: {
          marginVertical:75,
      }
})
export default RegisterScreen;