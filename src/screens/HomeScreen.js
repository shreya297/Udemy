import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen({navigation}) {
    const b1=()=>navigation.navigate('Component');
    const b2=()=>navigation.navigate('List');
    const b3=()=>navigation.navigate('Image');
    const b4=()=>navigation.navigate('Count');
    const b5=()=>navigation.navigate('Color');
    const greet=<Text>hello</Text>
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{greet}</Text> 

      <TouchableOpacity onPress={b1} >
      <Text style={{color:'red'}}> Click component</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={b2}> 
      <Text style={{color:'red'}}>Click List</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={b3}> 
      <Text style={{color:'red'}}>Click Image</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={b4}> 
      <Text style={{color:'red'}}>Click Counter
      </Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={b5}> 
      <Text style={{color:'red'}}>Click Color
      </Text> 
      </TouchableOpacity>

     
      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});