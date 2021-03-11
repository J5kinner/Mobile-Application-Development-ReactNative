
import React from 'react';
import { StyleSheet, View, Image,TouchableWithoutFeedback} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>console.log('Image Clicked')}>

        <Image 
          style={styles.logo} 
          source={{uri: "https://logodix.com/logo/786654.jpg"}}/>

      </TouchableWithoutFeedback>
        
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
