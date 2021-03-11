
import React from 'react';
import { StyleSheet, View, Image,TouchableOpacity} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableOpacity>

        <Image 
          style={styles.logo} 
          source={{uri: "https://logodix.com/logo/786654.jpg"}}/>

      </TouchableOpacity>
        
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
  logo:{
    width:200,
    height:100,
  }
});
