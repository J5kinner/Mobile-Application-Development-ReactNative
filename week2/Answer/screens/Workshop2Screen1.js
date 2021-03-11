import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Linking} from 'react-native';

export default function App() {

  const handleClick = () => Linking.openURL('http://netflix.com.au');

  return (
    <View style={styles.container}>
      <Text style={styles.para1} onPress={handleClick}>Netflix</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  para1: {
    color:'#ff0000',
    fontStyle:'italic',
    fontSize:40,
    fontWeight:'bold',
    textTransform:'uppercase',
  }
});
