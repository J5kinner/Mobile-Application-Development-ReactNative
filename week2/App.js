import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import AppColors from '/home/jonah/Desktop/COMP3130/Mobile-Applications-Development/week2/config/AppColors.js';
import AppText from '/home/jonah/Desktop/COMP3130/Mobile-Applications-Development/week2/components/AppText.js';
import AppButton from './components/AppButton';

export default function App() {

    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
       <AppText> Hello There!</AppText>
       <AppButton title="click here"></AppButton>

    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: AppColors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});