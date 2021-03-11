
import React from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';

export default function App() {

  const handleClick = () => Linking.openURL('http://netflix.com.au');

  return (
    <View style={styles.container}>
      <Text style={styles.para1} onPress={handleClick}>Netflix</Text>
      <Image style={styles.logo} source={require('./assets/netflix_logo.png')}/>
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
  },
  logo:{
    marginTop:50,
    width:100,
    height:100,
  }
});
