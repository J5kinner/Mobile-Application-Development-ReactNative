
import React from 'react';
import { StyleSheet, View, Image,TouchableOpacity, Button, Alert} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image 
          style={styles.logo} 
          source={{uri: "https://logodix.com/logo/786654.jpg"}}/>
      </TouchableOpacity>
      
      <Button
          color="#ee3523"
          title="ENTER SITE"
          onPress={()=>Alert.alert("G'day","Do you love Netflix?",
            [{text:"Yes", onPress: ()=> alert("Yay!!!!")},
            {text:"No", onPress: ()=> alert("Oh No!")}])}
        />


        
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
    marginBottom:100,
  }
});
