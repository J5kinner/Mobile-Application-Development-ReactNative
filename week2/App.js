import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import AppColors from '/home/jonah/Desktop/COMP3130/Mobile-Applications-Development/week2/config/AppColors.js';
import AppText from '/home/jonah/Desktop/COMP3130/Mobile-Applications-Development/week2/components/AppText.js';

export default function App() {

    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={{width: 50, height: 50, backgroundColor: AppColors.black}} />
         <View style={{width: 50, height: 50, backgroundColor: AppColors.primaryColor}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
       </View>,
       <View style={{flex: 1, flexDirection: 'column'}}>
       <View style={{width: 50, height: 50, backgroundColor: AppColors.black}} />
       <View style={{width: 50, height: 50, backgroundColor: AppColors.primaryColor}} />
       <View style={{width: 50, height: 50, backgroundColor: AppColors.secondColor}} />
       <AppText> Hello There!</AppText>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    backgroundColor: AppColors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});