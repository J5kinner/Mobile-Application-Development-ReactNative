import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <View style = {styles.view1}/>
      <View style = {styles.view2}/>
      <View style = {styles.view3}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#3b5998',
    flex: 2,
  },
  // text:{
  //   color: 'blue',
  // }, 
  view1:{
    backgroundColor:'#ADB9D3',
    flex:1,
  },
  view2:{
    backgroundColor:'#fff2eb',
    flex:1,
  },
  view3:{
    backgroundColor:'#edf5ff',
    flex:1,
  }
});
